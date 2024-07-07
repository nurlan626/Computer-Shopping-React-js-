import { users } from "./database.js"

export function initData(){
    localStorage.clear();
    localStorage.setItem("userId", '2');
    localStorage.setItem("users", JSON.stringify(users))
}

export function getUser(){
    let id = JSON.parse(localStorage.getItem("userId"));
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.filter((user) => user.id === id);
    return user;

  
}

export function getAllProducts(){

}