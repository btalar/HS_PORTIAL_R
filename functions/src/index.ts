import cors = require("cors");
import * as functions from "firebase-functions";

import * as admin from "firebase-admin";


admin.initializeApp();

const corsHandler = cors({
  origin: [
    "http://localhost:3000",
  ],
} );


export const createUser = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    admin
      .auth()
      .createUser({
        email: "example@example.com",
        password: "password123",
        displayName: "Admin",
      })
      .then((userRecord) => {
        // Set custom user claim
        return admin.auth().setCustomUserClaims(userRecord.uid, {
          isAdmin: true,
        })
          .then(() => {
            res.status(200).json({success: true, uid: userRecord.uid});
          })
          .catch((error) => {
            console.error("Error setting custom user claims:", error);
            res.status(500).json({success: false, error: error});
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({success: false, error: error});
      });
  });
});
