import  {initializeApp} from 'firebase/app'
import {getAuth, GithubAuthProvider, GoogleAuthProvider,TwitterAuthProvider} from 'firebase/auth'

const app = initializeApp({
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
})
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider(app)
export const twitterprovider = new TwitterAuthProvider(app)
export const gitprovider = new GithubAuthProvider(app)
export default app;
