import React, { useState } from "react";
import "./App.css";
// import Line from "./components/Line";
import listIcone from "./list.png";
import Input from "./components/Input";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faSquare, faTrash);

function App() {
  const deleteTask = (index) => {
    const filteredList = taskList.filter((elem, i) => {
      return index !== i;
      //si index différent de i : true (donc on garde).
      //si index === i :false (on jette)
    });

    setTaskList(filteredList);
  };

  const renderDoneTasks = () => {
    const doneTasks = taskList.filter((task, i) => {
      return task.isDone;
    });
    return doneTasks.map((task, index) => {
      return <p>{task.taskName}</p>;
    });
  };

  /*
  const filter = cb => {
    const filteredList = [];

    for (let i = 0 ; i < taskList.length ; i++) {
      if (cb(taskList[i], i)) {
        filteredList.push(taskList[i]);
      }
    }

    setTaskList(filteredList);
  };*/

  // Définition des différents états

  // Entrée dynamique de l'utilisateur
  const [input, setInput] = useState("");

  //Définition de l'état de la tâche isDone/!isDone
  const [taskList, setTaskList] = useState([
    {
      taskName: "Boire une bière",
      isDone: false,
      trash: false,
    },
    { taskName: "Acheter un bébé", isDone: false, trash: false },
    { taskName: "Brosser le chat", isDone: false, trash: false },
  ]);

  // return taskList.map((task) => <div>{task.taskName}</div>);

  return (
    <div>
      <div className="container">
        <header>
          <img src={listIcone} alt="liste"></img>
          <h1>Todo List</h1>
        </header>

        <main>
          <div className="taskListStyle">
            {taskList.map((task, index) => {
              return (
                <div className="todoList" key={index}>
                  <p className={task.isDone === true ? "underline" : null}>
                    <FontAwesomeIcon
                      icon="square"
                      onClick={() => {
                        const newTab = [...taskList];
                        newTab[index].isDone = !newTab[index].isDone;
                        setTaskList(newTab);
                      }}
                    />

                    <span>{task.taskName}</span>

                    <button
                      onClick={() => {
                        deleteTask(index);
                      }}
                    >
                      <FontAwesomeIcon icon="trash" />
                    </button>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="searchBarBox">
            <Input input={input} setInput={setInput}></Input>

            {/* Création du bouton permettant de rajouter une tâche.
           Le resultat est un objet, contenant l'entrée de l'utilisateur, contenue dans une clef, ainsi qu'un state permettant de changer l'état de la tâche.
           Le tout est push dans taskList (tableau) */}

            <button
              onClick={() => {
                const newTask = [...taskList];
                console.log(newTask);
                newTask.push({ taskName: input, isDone: false, trash: false });
                setTaskList(newTask);
              }}
            >
              Add task
            </button>
          </div>

          <div>{renderDoneTasks()}</div>
        </main>

        {/* <footer>
          <div>Made with React at Le Reacteur by Marine</div>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
