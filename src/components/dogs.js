import React,{useState} from 'react'

const DogsCom = () => {
    const [dog,setDogs]=useState(null)
    const [stop ,setStop]=useState(true)
    function Dogs() {
        console.log(stop)
        
        setTimeout(function go() {
            fetch("https://dog.ceo/api/breeds/image/random").then((response)=>{response.json().then((result)=>{
                setDogs(result.message)
              
        
            })
            })  
        }, 1000);
     

        
    
    }
  return (
    <div>
        <button onClick={()=>{Dogs()}} > Start</button>
        <button onClick={()=>setStop(false)} > Stop</button>
        <h1>Dogs</h1>
        <a href='/'><h3>Home</h3></a>
        <img src={dog}  />
      
    </div>
  )
}

export default DogsCom