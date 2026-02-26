import Meal from './Meal';

export default function Meals() {
  return (
    <ul className="w-[90%] max-w-280 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 mx-auto my-8 p-4">
      <li className="w-full bg-[#1d1a16] text-center overflow-hidden rounded-2xl">
        <Meal image="beef-tacos.jpg" title="beaf" price="10.99" description="Deliscious meal" />
      </li>

      <li className="w-full bg-[#1d1a16] text-center overflow-hidden rounded-2xl">
        <Meal image="caesar-salad.jpg" title="beaf" price="10.99" description="Deliscious meal" />
      </li>

      <li className="w-full bg-[#1d1a16] text-center overflow-hidden rounded-2xl">
        <Meal image="chicken-curry.jpg" title="beaf" price="10.99" description="Deliscious meal" />
      </li>

    </ul>
  );
}