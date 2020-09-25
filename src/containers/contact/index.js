import React, {useState} from 'react';
import '../../App.css';

function Contact() {

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [errorMessage, seterrormessage]= useState("");

    console.log('name =>', name);
    console.log('email =>', email);

    return (
        <div>
         <h2>Nous contacter</h2>
         <br/>
        <p>Tél : 06 15 37 71 51 (Professeur, responsable de la section)</p>
        <br/>
        <p>Tél : 01 48 26 39 11 (Secrétariat)</p>


        <div className="formulaire">
            <form onSubmit={ (e)=>{
                e.preventDefault();
                console.log(name, email)
           
            }} action="Post" type="submit">
            <input onChange={(e)=>{
                const name = e.target.value;
                setName(name);
                console.log(e.target.value)
            }} type="text" placeholder="Name" value={name}/>
            <input onChange={(e)=>{
                const email = e.target.value;
                setEmail(email);
                console.log(e.target.value)
            }} type="email" placeholder="Email" value={email}/>
            <textarea placeholder="Message"/>
            <button type="submit">Envoyer</button>
            </form>
        </div>

        </div>
    )
}

export default Contact
