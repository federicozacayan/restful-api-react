import React, { useState, useEffect } from "react";
import User from './User'

function App() {

    const [info, setInfo] = useState();

    useEffect(() => { //same functionality of componentDidMount()
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setInfo(data)
        })
        .catch(console.log)
    }, []);

    const deleting = (id) =>{
        let tmp  = info.filter((a) => {
            return a.id !== id;
        })
        setInfo(tmp);
    }

    const deleleUser = (id) => {
        console.log("deleting "+id);
            fetch('https://jsonplaceholder.typicode.com/users/'+id, {
          method: 'DELETE'
        })
        .then(() => {
            deleting(id);
        })
    }

    const updating = (post) =>{
        console.log("Updating "+post.id+" done!");
    }

    const updateUser = (post) => {
        console.log("Updating "+post.id);
        fetch('https://jsonplaceholder.typicode.com/users/'+post.id, {
        method: 'PUT',
        body: JSON.stringify(post),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => updating(json))
    }

    const create = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Federico Zacayan',
                email: 'federico.zacayan@gmail.com',
                phone: '444-555'
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            setInfo([...info, json]);
        })
    }


    if(typeof info === 'undefined'){
        return (<div>Loading...</div>)
    } else {
        return (<div>
            {info.map((contact) => (
                <User key={contact.id} contact={contact} deleleUser={deleleUser} updateUser={updateUser}></User>
            ))}
            <input type="button" onClick={create} value="Create new  User"/>
            </div>)
    }
}

export default App;
