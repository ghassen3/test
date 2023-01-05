import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import { FaWindowClose } from "react-icons/fa";


export default function WorkSpace(){

    const [openApp, setOpenApp] = useState([]);

    useEffect(()=>{
        setOpenApp(JSON.parse(localStorage.getItem('openApp')));
    
      })
    function remove(app) {
        let data = [null];
        data=JSON.parse(localStorage.getItem('openApp'));
        data.splice(app,1)
        localStorage.setItem("openApp", JSON.stringify(data));
        return data;
    }
    return (
        <>
        {   openApp.length==1 ?
            (
                <GridLayout
                    className="layout"
                    cols={20}
                    rowHeight={30}
                    width={1200}
                    draggableCancel=".cancelSelectorName"
                >
                    <div key="a" className="text-3xl font-bold underline text-red-500 bg-purple-200" data-grid={{ x: 3, y: 0, w: 8, h: 7}}>
                       
                        <button onClick={()=>remove(0)} class="cancelSelectorName absolute top-0 right-0"><FaWindowClose className='h-8 w-8'/></button>
                        
                        <div className="text-3xl font-bold underline text-red-500 bg-purple-200">
                            Welcome To {openApp[0].title}
                        </div>
                    </div>
                </GridLayout>  
                
            ):
            (<GridLayout
                className="layout"
                cols={20}
                rowHeight={30}
                width={1200}
                draggableCancel=".cancelSelectorName"
            >
                {openApp.map((item,index)=>(
                
                    <div key={index} className="text-3xl font-bold underline text-red-500 bg-purple-200" data-grid={{ x: (((index%2)*10)+3), y: Math.floor(index/2), w: 8, h: 7}}>
                        
                        <button onClick={()=>remove(index)} class="cancelSelectorName absolute top-0 right-0"><FaWindowClose className='h-8 w-8'/></button>
                        <div className="text-3xl font-bold underline text-red-500 bg-purple-200">
                            Welcome To {item.title}
                        </div>
                    </div>
                 
                ))}
            </GridLayout>  )
        }
        
        </>
      
    )
}

