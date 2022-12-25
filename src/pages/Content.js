import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";

export default function Content(){
    let {app} = useParams();

    return (
        <>
            <div class="relative">
                <Link  to={'/'}>
                    <button class="absolute top-0 right-0"><FaWindowClose className='h-8 w-8'/></button>
                </Link>
                <div className="text-3xl font-bold underline text-red-500 bg-purple-200">
                    Welcome To {app}
                </div>
            </div>
        </>
    )
}
