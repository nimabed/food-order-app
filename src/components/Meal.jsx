

export default function Meal({ image, title, price, description}) {
  return (
    <article className="flex flex-col items-center justify-between">
          <img className="w-full h-80 object-cover" src={image} alt="food image" />
          <h3 className="text-2xl font-bold my-3">{title}</h3>
          <span className="text-sm font-bold bg-[#312c1d] py-2 px-8 text-[#ffc404] rounded-sm">${price}</span>
          <span className="m-4">{description}</span>
          <button className="bg-[#ffc404] border border-[#ffc404] text-[#1f1a09] py-2 px-8 mb-4 rounded-sm cursor-pointer hover:bg-[#ffab04] hover:border-[#ffab04] hover:text-[#1f1a09]">Add to cart</button>
    </article>
  );
}