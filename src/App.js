import React, { useState } from "react";
import "./App.css";
import listIcone from "./list.png";
import Input from "./components/Input";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faSquare, faTrash);

function App() {
  // let taskState = (isDone, trash) => {
  //   if (isDone === true) {
  //     return "underline";

  //   }else if (trash === true) {
  //     return "hidden";
  //   }else {
  //     return null;
  // };
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
                <div className="todoList">
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

                    <FontAwesomeIcon
                      icon="trash"
                      onClick={() => {
                        const newTab = [...taskList];
                        newTab[index].trash = true;
                      }}
                    />
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
        </main>

        {/* <footer>
          <div>Made with React at Le Reacteur by Marine</div>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
