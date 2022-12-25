import React from 'react'
import { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from 'react-router-dom';

function Application({items,menu}){
    const [list, setList] = useState(items);
    const [updated, setUpdated] = useState(menu);
    let url="/app/";
    useEffect(()=>{
        if (updated) {
            setList(JSON.parse(localStorage.getItem('menu')));
        }else{
            setList(items);
        }
        
    })
    return (
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
                list.map((item, index)=>(
                    <li className="text-white hover:text-indigo-200" key={item.id}>
                        <Link to={url+item.title}>
                            {item.title}
                        </Link> 
                    </li>
                ))
            }
        </ul>
    )
}

export default Application