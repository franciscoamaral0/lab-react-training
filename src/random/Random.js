import './random.css'



function Random ({min, max}){
    console.log(Number(min+max))
    return(
        <div className = 'container'>
           <p>Random value between {min} and {max} = {Math.floor(Math.random() * (max - min)) + min}</p>    
        </div>
    )
}

export default Random