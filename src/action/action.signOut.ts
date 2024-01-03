import { signOut } from 'firebase/auth';

import { auth } from '../config';

export const actionSignOut = ():Promise<void> => signOut(auth);
