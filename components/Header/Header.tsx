import Logo from "./Logo"
import logo from "../../assets/Vector 2 (1).png"

const Header = () => {
  return (
    <header className="flex w-[90%] mx-auto justify-between mt-5 mb-10">
        <h2 className="text-2xl font-semibold text-black">
        <Logo src={logo} />SAlytics</h2>
        <button className="bg-[black] text-white h-[50px] w-[130px] rounded-md font-normal text-base mt-3">ANALYZE ASAs</button>
    </header>
  )
}

export default Header