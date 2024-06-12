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

