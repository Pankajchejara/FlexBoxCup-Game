import React from 'react'

const SideComponent = ({child,changeHandler,ChangeInputValue,cupbox,clickHandlerback,clickHandler,score}) => {

  return (
    <div>
     <div className='  shadow-2xl shadow-blue-500/50    flex justify-center items-center flex-col sidediv gap-y-9  w-[320px] h-[500px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[500px]  mb-3'>
    <p className='text-3xl  font-bold'>FLEXBOX GAME</p>
  <div className=' w-[80%]  flex justify-center items-center  flex-col  '>


    <div className='   w-full h-full '>
       <p className='text-xl gap-y-4'>
Flexbox Froggy is a gamified online tool that teaches CSS Flexbox layout through interactive challenges, making learning fun and practical.</p>
   <p className='text-brown-200'>Please give space when you apply two or more css</p>
{
  child?(<div className='flex flex-col mt-[20px]'>
  <p>
<code className='flex flex-col '><p className='font-sarif'>.container &#123; </p>
 <p className='font-sans'>display: flex </p></code>
</p>
<div>
<textarea
type='text'
onChange={changeHandler}
placeholder='Type your tailwind css'
textarea={ChangeInputValue}
value={ChangeInputValue}
className='boxdiv h-[10%] outline-none px-4 py-1 rounded-md  w-[70%] mt-[4%] bg-richblack-100 text-black .placeholder-opacity-100 '
/></div>


<p>&#125;</p>
 </div> ):
 
 
 (<div className='flex flex-col mt-[20px]'>
 <p>
<code className='flex flex-col '><p className='font-sarif'>.container &#123; </p>
<p className='font-sans'>display: flex </p>
<p>align-items:flex-start</p>
<p>&#125;</p>
</code>
<div className='flex'>
  <p>.cup {cupbox} &#123; </p>
<textarea
type='text'
onChange={changeHandler}
placeholder='Type your tailwind css'
value={ChangeInputValue}
className='boxdiv h-[10%] outline-none px-4 py-1 rounded-md  w-[70%] mt-[6%] bg-richblack-100 text-black .placeholder-opacity-100 '
/></div>

<p> &#125;</p>
</p>
<div>
</div>


</div> 
)
}





      

</div>



    <div className='flex justify-between w-full  '>
    <button className=' boxdiv bg-blue-500 px-4 py-1 rounded-md  text-center' onClick={clickHandlerback}>back</button>
<div className='bg-blue-500 boxdiv  text-black px-4 py-1 rounded-md w-[60%] text-center'>Page : {score}</div>
    <button className='bg-blue-500 boxdiv px-4 py-1 rounded-md text-center' onClick={clickHandler}>next</button>
    
    </div>
   
    
</div>
</div>
    </div>
  )
}

export default SideComponent
