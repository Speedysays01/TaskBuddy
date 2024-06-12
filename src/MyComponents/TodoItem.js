import React, { useState,} from 'react';


export const TodoItem = ({ todo, onDelete ,done}) => {
  const [isComplete, setIsComplete] = useState(false);






  const handleButtonClick = () => {
    console.log("task done");
    setIsComplete(!isComplete);
   };
  
  return (
    <> 
     
     
      
      {todo.sno !== 0 ? (

        <div className= {`card  ${isComplete&&!done ? 'complete' : ''}  ${!isComplete&&done ? 'complete' : ''}`}> 
          
          
      
        <div className="circle">
        
        {todo.imp === "high" && (
                <div className="high"></div>
            )}
            {todo.imp === "moderate" && (
                <div className="moderate"></div>
            )}
            {todo.imp === "low" && (
                <div className="low"></div>
            )}
        
         </div>
          

          <h4 className="card-title  ">{todo.title}</h4>
          <p className="card-text">{todo.desc}</p>
          <h6>Created on</h6>
          <p className="time">{todo.time}</p>

          <div className="options">
         
          <button
            className="btn remove btn-danger btn-sm"
            onClick={() => {
              onDelete(todo);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>

          < button   className={`task btn check btn-sm `} onClick={handleButtonClick}>
          < i className="fa-solid fa-check"> </i>
          </button>

          
          </div>

        </div>
      ) : (
        ""
      )}
    </>
  );
};


































/*   <div id="high" className="high no"></div>
         <div id="moderate" className="moderate "></div>
         <div className="low no"></div>*/


/*if(todo.imp==="high")
{
    <div className="high "></div>
}
else if(todo.imp==="moderate")
{
  <div className="moderate "></div>
}
else
{
      <div className="low "></div>
}*/

/*const [time , setTime] = useState([
  {
     day: "",
     month: "" ,
     year: "",
     hour:"" ,
     correctHour: "",
     ampm:"" ,
     minutes:"",
}]);




const addTime = ()=>{

  const created = new Date();
  let day = created.getDate();
  let month = created.getMonth() + 1;
  let year = created.getFullYear();  
  let hour = created.getHours();
  let correctHour = hour > 12 ? hour-12 : hour;
  let ampm = hour > 12  ? "PM" : "AM";
  let minutes = created.getMinutes();

 
  const myTime = {

    day: day,
    month: month ,
    year: year,
    hour:hour ,
    correctHour: correctHour,
    ampm:ampm ,
    minutes:minutes,
  };
  

  setTime([...time , myTime]);

  console.log(myTime);

  }

*/

/*<div className="card" >
<h4 className="card-title">{todo.title}</h4>
<p className="card-text">{todo.desc}</p>
<button classNameName="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
</div>*/

/*<div classNameName='item'>

      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
     
      
      { todo.sno!==0? <button classNameName="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button> : "" }
   
    </div>*/
