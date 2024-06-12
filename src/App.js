import "./App.css";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Todo deleted", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc ,imp) => {
    console.log("ading", title, desc);

    let sno = todos[todos.length - 1].sno + 1;

    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let hour = h > 12 ? h - 12 : h;
    let m = now.getMinutes();
    let ampm = h > 12 ? "PM" : "AM";

    let time =
      dd + "/" + mm + "/" + yyyy + " at " + hour + ":" + m + " " + ampm;

    let newImp = imp===""? todos[todos.length - 1].imp : imp 

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time: time,
      imp:newImp,
    };



    setTodos([...todos, myTodo]);

    console.log(myTodo);
  };

  const [todos, setTodos] = useState([
    {
      sno: 0,
      title: "",
      desc: "",
      time: "",
      imp: "",
      isComplete: false,
    },
  ]);


  const[done , setDone] = useState(false)

  const handleYes = ()=>{
    setDone(true);
    console.log("yesss");
  }

  const handleNo = ()=>{
    setDone(false);
  }


  
 
 
  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />

      <div className="tasks">
      <button className="yes" onClick={handleYes}>Completed Tasks</button>
      <button className="no" onClick={handleNo}>Incomplete Tasks</button>
      </div>

      <Todos todos={todos} onDelete={onDelete} done={done}/>

      <Footer />
    </div>
  );
}

export default App;
