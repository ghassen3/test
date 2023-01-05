import { useEffect, useState } from "react";
import Application from "./Application";
import '../App.css';

export default function Menu() {
    const [navbar, setNavbar] = useState(false); 
    const [list, setList] = useState();
    const [updated, setUpdated] = useState(true);

    const generateId = () => {
        return (Math.random() + 1).toString(36).substring(8);
    };
    const defaultVal = [
        {
          id: generateId(), 
          title: "APP1",
          content: "This is content 1",
        },
        {
          id: generateId(),
          title: "APP2",
          content: "This is content 2",
        },
        {
          id: generateId(),
          title: "APP3",
          content: "This is content 3",
        },
      ];
      const [menu, setMenu] = useState(defaultVal);
    useEffect(()=>{
        setList(menu);
    })

    function add  () {
        setUpdated(true);
        let length= menu.length+1; 
        let data={
            id: generateId(),
            title: "APP"+length, 
            content: "This is content "+length, 
        }

        menu.push(data);
        setMenu(menu);
        localStorage.setItem('menu',JSON.stringify(menu));
        

    }

    return (
        <nav className="w-full bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        >
                            <Application items={menu} menu={updated}></Application>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <button
                        onClick={()=>add()}
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Add App
                    </button>
                </div>
            </div>
        </nav>
    );
}