import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className="flex justify-between py-12 px-[10%]">
      <div className="flex items-center space-x-5">
        <img className="size-16 rounded-full ring-2 ring-amber-300" src={logo} alt="logo-image" />
        <h1 className="text-2xl font-bold uppercase text-amber-300 tracking-[0.2rem]">reactfood</h1>
      </div>
      <button className="text-2xl text-amber-300 cursor-pointer">Cart(0)</button>
    </header>
  )
}