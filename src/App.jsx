import React, { useState } from 'react';
import {Linksdata} from './Linksdata';
import SideComponent from './SideComponent';


const App = () => {
let MugImage="https://res.cloudinary.com/dqr1ihw8d/image/upload/v1709795661/asykfhg7fw6tp25kzokn.png"


    const[ChangeInputValue ,setChangeInputValue]=useState("")
    const[level,setLevel]=useState(1);
    const[score,setScore]=useState(1);
   
    const[cupbox,setCupBox]=useState('')
    const[child,setChild]=useState(true);
   let [i,setI]=useState(0);


   const [InputValue ,setInputValue]=useState('')
   const [InputValue2,setInputValue2]=useState('')
   let InputValue3=''
   let InputValue4=''
 
   const [NewInputValue,setNewInputValue]=useState('')
   const [NewInputValue2,setNewInputValue2]=useState('')
  let NewInputValue3=''
   let NewInputValue4=''
 
console.log(level+"level h ji")

    const[beta ,setBeta]=useState(Linksdata[i].title)


  const numberOfDivs = 15;


function changeHandler(e){
  setChangeInputValue(e.target.value);

if (score===21){
  setInputValue(e.target.value)
}
if (score===20){
  setInputValue2(e.target.value)
 }

}

function clickHandler(){
   

        (i<23) ?(setI(i=i+1)):(i=0)
        setBeta(Linksdata[i].title)
        let BoxData = (Linksdata[i].BOX)
        let dk = (Linksdata[i].id)
        if(Linksdata[i].id===20){
          setChild(false)
          setNewInputValue2('order-last')
          setCupBox(2)
         
         
        }
        else if(Linksdata[i].id===21){
          setNewInputValue2('')
          setChild(false);
          setNewInputValue('self-end')
          setInputValue2('')
          setCupBox(1)
        }
        else{
          setChild(true)
        }
        setScore(dk)
        setLevel(BoxData)
        setChangeInputValue("")
       
   
  

}

function clickHandlerback(){
     (i>0) ?(setI(i=i-1)):(i=0)
        setBeta(Linksdata[i].title)
        let BoxData = (Linksdata[i].BOX)
        setLevel(BoxData)
        setChangeInputValue("")
        if(Linksdata[i].id===20){
          setChild(false)
          setNewInputValue2('order-last')
          setNewInputValue('')
          setCupBox(2)
         
        }
        else if(Linksdata[i].id===21){
          setNewInputValue2('')
          setChild(false);
          setNewInputValue('self-end')
          setInputValue2('')
          setCupBox(1)
        }
        else{
          setChild(true)
        }
        
        setChangeInputValue("")

        let dk = (Linksdata[i].id)
        setScore(dk)
    
   


}

let res=Array.from({length:15})
console.log("res here",res);
console.log(typeof(res))
 
  return (

// main screen div 
    
<div className='maindiv w-[100vw] h-[100vh]' >
   <div className=' flex  justify-center items-center'>

   <h1 className='text-center mt-[10px]  text-pink-400 font-bold text-[50px] '>FLEXBOX CUP </h1> 
  </div> 
   <div className='flex lg:flex-row flex-col gap-y-4 justify-center items-center  lg:justify-around  '>
    <div className='relative w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px]  mt-[30px]'>



{/* Cup box div  */}

  {
    child?(<>
    <div className={`parent-div  absolute top-0    w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px]  flex  shadow-xl shadow-richblack-500/50  boxdiv  ${beta}`}>
    {Array.from({ length: numberOfDivs }).map((_, index) => (
      <div
      key={index}
    
      className={`child-div ${index >= level? 'bg-blue-500 hidden' : index%2===0?(' border-b-[10px] border-r-[10px] border-l-[10px]  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]     md:w-[100px] md:h-[100px] border-black'):(' border-b-[10px]  border-r-[10px] border-l-[10px] borderdiv w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]     md:w-[100px] md:h-[100px] ')}`}
    >
   
      
      
    </div>
    ))}

  
  </div>
  

  <div className={`parent-div   absolute top-0   w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] flex  ${ChangeInputValue}` }>
      {Array.from({ length: numberOfDivs }).map((_, index) => (
       
         <div
         key={index}
       
         className={`  flex justify-center items-center child-div ${index >= level? 'bg-blue-500 hidden' : index%2==0?(' box w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]     md:w-[100px] md:h-[100px]'):('  box w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]     md:w-[100px] md:h-[100px] ')}`}
       >
          <img src={MugImage} alt='NO preview'/>
         
       </div>
      ))}
    </div>
    </>
  
  ):(
    // here 4 divs 
    
     <div className={`parent-div border border-black flex-row absolute top-0  w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] flex  shadow-xl shadow-richblack-500/50  boxdiv items-start  `}>
      
     <div className=' absolute top-0 flex items-start  w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] '>

{/* div 1 */}
        <div className={`${InputValue} w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  relative `}>
          
<div className='  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  relative'>
<img src={MugImage} className='w-full h-full ' alt='NO preview'/>
        <p className='absolute top-9 left-7'>1</p>
</div>
 </div>

{/* div 2 */}

        <div className={`${InputValue2}  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]   `}> 
       <div className=' w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] relative'>
<img src={MugImage} className='w-full h-full ' alt='NO preview'/>
        <p className='absolute top-9 left-7'>2</p>
</div>
        </div>


{/* div 3 */}
        <div className={`${InputValue3}  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  `}> 
        <div className='  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  relative'>
<img src={MugImage} className='w-full h-full 'alt='NO preview' />
        <p className='absolute top-9 left-7'>3</p>
</div></div>

{/* div 4 */}
        <div className={`${InputValue4}   w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]   `}> 
        <div className=' w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  relative'>

<img src={MugImage} className='w-full h-full ' alt='NO preview'/>
        <p className='absolute top-9 left-7'>4</p>
</div></div>
      
      
      </div>


      <div className=' absolute top-0 flex items-start  w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] '>
        <div className={`${NewInputValue}  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  border border-blue-50  `}>
      1
        </div>
        <div className={`${NewInputValue2}  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  border border-blue-50  `}> 2</div>
        <div className={`${NewInputValue3}  w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  border border-blue-50  `}> 3</div>
        <div className={`${NewInputValue4}   w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]  border border-blue-50  `}> 4</div>
      
      
      </div>
    
   </div>

  )
  }  


  















 

    </div>


{/* sidediv */}
<SideComponent child={child} changeHandler={changeHandler}ChangeInputValue= {ChangeInputValue}cupbox={cupbox}clickHandlerback={clickHandlerback} clickHandler={clickHandler}score={score}/>
</div>  
    
    
    </div>
 

 
  );
};

export default App;

