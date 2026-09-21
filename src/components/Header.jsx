import { useNavigate } from "react-router";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return(
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-16 py-6 shadow-sm">
        <h1  className="text-3xl font-bold text-pink-500">Brandku</h1>
        <button className="md:hidden text-2xl" 
        onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "x" : "☰"}
        </button>

        <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none gap-6 md:gap-8 font-medium text-slate-600`}>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/")} >Home</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/about")} >About</p>
            <p className="text-gray-700 hover:text-gray-900" onClick={() => navigate("/pricing")} >Pricing</p>
        </div>
    </header>
    )
}

export default Header;