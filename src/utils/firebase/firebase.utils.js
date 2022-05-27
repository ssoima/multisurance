import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  Timestamp
} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDOJQDRcKf19q3akRl9WE5oi5r7dAm5bnI",
  authDomain: "multisurance.firebaseapp.com",
  projectId: "multisurance",
  storageBucket: "multisurance.appspot.com",
  messagingSenderId: "631689118882",
  appId: "1:631689118882:web:08fe9de958329a39ba83fb"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createClaimDocument = async (ownerId, title, lawyerName, lawyerEmail ) => {
  const newClaimRef = doc(collection(db, "claims"));
  const response= await setDoc(newClaimRef, {
    owner: ownerId,
    title: title,
    lawyerName: lawyerName,
    lawyerEmail: lawyerEmail,
    creationDate: Timestamp.fromDate(new Date()),
    confirmedByLawyer: false
  });
  const newClaim = await getDoc(newClaimRef);
  return {id: newClaimRef, ...newClaim};
}

export const getClaimDocuments = async () => {
  const collectionRef = collection(db, 'claims');
  const q = query(collectionRef);  // where("name", "==", true)

  const querySnapshot = await getDocs(q);
  const claimsMap = querySnapshot.docs.map((docSnapshot) => {
    return { id: docSnapshot.id, ...docSnapshot.data()};
  });
  console.log(claimsMap)
  return claimsMap;
}

export const updateClaimDocument = async (claim) => {
  const claimRef = collection(db, 'claims', claim.id);
  await setDoc(claimRef, claim, );
}