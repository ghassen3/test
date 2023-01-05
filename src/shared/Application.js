import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Application({items,menu}){
    const [list, setList] = useState(items);
    const [updated, setUpdated] = useState(menu);

    useEffect(()=>{
        if (updated) {
            setList(JSON.parse(localStorage.getItem('menu')));
        }else{
            setList(items);
        }
        
    })
    function open(app) {
        let data = [null];
        data=JSON.parse(localStorage.getItem('openApp'));
        data.push(app);
        
        localStorage.setItem("openApp", JSON.stringify(data));
        return data;
    }
    return (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
                list.map((item, index)=>(
                    <li className="text-white hover:text-indigo-200" key={item.id}>
                        <Link to={'/work'} onClick={()=>open(item)}>
                            {item.title}
                        </Link> 
                    </li>
                ))
            }
        </ul>
    )
}

export default Application