import { signInWithEmailAndPassword as signIn, UserCredential } from 'firebase/auth';

import { auth } from '../config';

// eslint-disable-next-line max-len
export const actionSignIn = (email:string, password:string):Promise<UserCredential> => signIn(auth, email, password);
