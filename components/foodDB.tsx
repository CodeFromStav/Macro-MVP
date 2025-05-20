
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary

const saveFood = async (food) => {
  try {
    await addDoc(collection(db, 'foods'), food);
    console.log('Food saved');
  } catch (error) {
    console.error('Error saving food:', error);
  }
};
const foodDB = {
    Breakfast: ['Eggs', 'Bacon', 'Toast'], 
    Lunch: ['Chicken', 'Rice', 'Salad'],
    Dinner: ['Steak', 'Potatoes', 'Vegetables'],
    Snacks: ['Chips', 'Cookies', 'Fruit']
}

export default foodDB;