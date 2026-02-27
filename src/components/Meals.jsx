import { useEffect, useState } from 'react';
import Meal from './Meal';
import { getMeals } from '../http/http.js';

export default function Meals() {

  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {

      try {
        const data = await getMeals();

        setAvailableMeals(data);

      } catch(error) {
        console.log(error.message);
      }
    }

    fetchMeals();
  }, [])


  return (
    <ul className="w-[90%] max-w-280 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 mx-auto my-8 p-4 list-none">
      {
        availableMeals.map((meal) => 
        <li 
          key={meal.id}
          className="w-full bg-[#1d1a16] text-center overflow-hidden rounded-2xl"
        >
          <Meal image={'http://localhost:3000/' + meal.image} title={meal.name} price={meal.price} description={meal.description} />
        </li>)
      }
    </ul>
  );
}