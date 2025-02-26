
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const addUserToFirestore = async (userData: any) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), userData);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};
