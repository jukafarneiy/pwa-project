'use client'

import { createContext, useContext, useState } from "react";


// criação do context
const TaskContext = createContext();

//hook ou função para acessar o context
export const useTaskContext = () => {
    return useContext(TaskContext);
}

//provedor do context
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addNewTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    return (
        <TaskContext.Provider value={{ tasks, addNewTask }}>
            {children}
        </TaskContext.Provider>
    )

}