import React, { useContext, useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {

  //States
  const [newTask, setNewTask] = useState("")
  const [todoList, setToDoList] = useState([ "Bloquear paginas s/ autenticação", "Funçao logout", "Componentização" ])
  const [doingList, setDoingList] = useState(["Contexto de Autenticação", "Integraçao Firebase"])
  const [doneList, setDoneList] = useState([" React Router", "NavBar", "Formulários", "States", "Hook de autenticaçao", "Registrando Usuário", "Tela de login", ])
  const [error, setError] = useState("");


  const handleTask = (e) => {
    e.preventDefault(); // Prevenir recarregamento da página

    if (!newTask) { // Checar se newTask não está vazia
      setError("Por favor, insira uma tarefa antes de adicionar.");
      return;
    }
    setError("")
    setToDoList([...todoList, newTask]); // Adicionar newTask ao todoList
    setNewTask(""); // Limpar o campo após adicionar
  };


  // funcao para mover de um array par o outro

  const removerElemento = (lista, indice) => [...lista.slice(0, indice), ...lista.slice(indice + 1)];

  const moveTo = (selectedList, index, currentList) => {
    let task;
    let newToDoList = [...todoList];
    let newDoingList = [...doingList];
    let newDoneList = [...doneList];

    // Determinar qual a lista atual e remover a tarefa dessa lista
    if (currentList === "todo") {
      task = newToDoList.splice(index, 1)[0];
    } else if (currentList === "doing") {
      task = newDoingList.splice(index, 1)[0];
    } else if (currentList === "done") {
      task = newDoneList.splice(index, 1)[0];
    }

    // Adicionar a tarefa na lista selecionada
    if (selectedList === "doing") {
      newDoingList.push(task);
    } else if (selectedList === "done") {
      newDoneList.push(task);
    } else if (selectedList === "todo") {
      newToDoList.push(task);
    }

    // Atualizar os estados
    setToDoList(newToDoList);
    setDoingList(newDoingList);
    setDoneList(newDoneList);
  };


  return (
    <div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.btn}>
        <form onSubmit={handleTask}>
          <label>
            Inserir novo card:
            <input
              type="text"
              placeholder='Digite uma nova task'
              name='newTask'
              required
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className={styles.inputTask}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Adicionar
          </button>
        </form>
      </div>

      <div className={styles.container}>
        <label>
          To Do
          <ul className={styles.box}>
            {todoList.map((task, index) => (
              <li key={index} className={styles.taskItem}>
                {task}
                <select onChange={(e) => moveTo(e.target.value, index, 'todo')}>
                  <option value="">Select...</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </li>
            ))}
          </ul>
        </label>


        <label>
          Doing
          <ul className={styles.box} id="box2">
            {doingList.map((task, index) => (
              <li key={index} className={styles.taskItem}>
                {task}
                <select onChange={(e) => moveTo(e.target.value, index, 'doing')}>
                  <option value="">Select...</option>
                  <option value="todo">To do</option>
                  <option value="done">Done</option>
                </select>
              </li>
            ))}
          </ul>
        </label>

        <label>
          Done
          <ul className={styles.box} id="box3">
            {doneList.map((task, index) => (
              <li key={index} className={styles.taskItem}>
                {task}
                <select onChange={(e) => moveTo(e.target.value, index, 'done')}>
                  <option value="">Select...</option>
                  <option value="doing">Doing</option>
                  <option value="todo">To Do</option>
                </select>
              </li>
            ))}
          </ul>
        </label>

      </div>
    </div>
  );
}

export default Home;


