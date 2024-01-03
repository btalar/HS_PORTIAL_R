import * as functions from "firebase-functions";
import * as admin from "firebase-admin";


admin.initializeApp();
const firestore = admin.firestore();

exports.createUser = functions.https.onCall(async (data) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
      phoneNumber: data.phoneNumber,
    });

    const userDocRef = firestore.collection("users").doc(userRecord.uid);
    await userDocRef.set({
      name: data.name,
      surname: data.surname,
      phoneNumber: data.phoneNumber,
      userType: data.userType,
      email: data.email,
    });


    await admin.auth().setCustomUserClaims(userRecord.uid, {
      isAdmin: data.userType === "admin",
      isManager: data.userType === "manager",
    });

    return {
      success: true,
      message: "Dodano użytkownika",
      user: userRecord.toJSON(),
    };
  } catch (error) {
    return {
      success: false,
      message: "Error creating user:" + error,
    };
  }
});

