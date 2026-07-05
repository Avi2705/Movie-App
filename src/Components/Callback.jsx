import React, { act, useState } from 'react'

const Callback = ({getColor}) => {
const [activecolor , setActivecolor] = useState("#000")
// console.log(activecolor);
 const setfunction=(e)=>{
setActivecolor(e.target.value)
getColor(e.target.value)
 }
return (
    <div className='flex justify-center items-center w-[300px] h-[35px]'>
        <div className='flex pl-6'>

       
        <input type="color"  value={activecolor} onChange={(e)=>setfunction(e) }  className='border-2 ' />
        <button onClick={()=>navigator.clipboard.writeText(activecolor)} >{activecolor}</button>
        </div>
    </div>
  )
}

export default Callback