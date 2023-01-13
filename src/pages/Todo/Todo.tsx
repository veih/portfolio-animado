import React from "react";
import{ useState } from "react";
import { Container } from "react-bootstrap";

import { ListItem } from "../../components/ListItem";
import { Item } from "../../types/Item";
import { AddArea } from './../../components/AddArea';
import './style.css'

export const Todo = () => {

    const [list, setList] = useState<Item[]>([]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });
        setList(newList);
    }

    // Função feita para tarefinha de casa.
    const handleTaskChange = (id: number, done: boolean) => {
        let newList = [...list];
        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].done = done;
            }
        }
        setList(newList);
    }

    const handleDeleteTask = (id: number) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <Container className="todo">
            <h1 className='listcor' >Lista de Tarefas</h1>

            <AddArea onEnter={handleAddTask} />

            {list.map((item, index) => (
                <ListItem 
                    key={index}
                    item={item}
                    onChange={handleTaskChange}
                    onDelete={() => handleDeleteTask(item.id)}
                />
            ))}
        </Container>
    );
}
