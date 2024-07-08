import { users } from "./database.js"

let userId = null;

export function initData(){
    localStorage.clear();
    localStorage.setItem("userId", userId);
    localStorage.setItem("users", JSON.stringify(users));
}

export function getUser(){
    let id = JSON.parse(localStorage.getItem("userId"));
    if(!id){
        return null;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.id === id); 
    console.log('wee');
    return user ? user : null;  
}

export function getAllProducts(){
    // Реализация функции
}
