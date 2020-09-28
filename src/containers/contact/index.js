import React, {useState} from 'react';
import '../../App.css';

function Contact() {

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");
    const [errorMessage, seterrormessage]= useState("");

    console.log('name =>', name);
    console.log('email =>', email);
    console.log('message =>', message);

    return (
        <div>

        <div className="contacts">

         <h2>Nous contacter</h2>
         <br/>
        <p>Tél : 06 15 37 71 51 (Professeur, responsable de la section)</p>
        <br/>
        <p>Tél : 01 48 26 39 11 (Secrétariat)</p>
        </div>


        <div className="formulaire">
        
            <form onSubmit={ (e)=>{
                e.preventDefault();
                console.log(name, email)
           
            }} action="Post" type="submit">

            <input onChange={(e)=>{
                const name = e.target.value;
                setName(name);
                console.log(e.target.value)
            }} required type="text" placeholder="Nom" value={name}/>

            <input onChange={(e)=>{
                const email = e.target.value;
                setEmail(email);
                console.log(e.target.value)
            }} required type="email" placeholder="Email" value={email}/>

            <textarea onChange={(e)=>{
                const message = e.target.value;
                setMessage(message);
                console.log(e.target.value)
            }} placeholder="Message" rows="6" cols="33"/>

            <button type="submit">Envoyer</button>

            </form>
        </div>

        <div className="transports">
        <h2>Transports</h2>
        <p>Métro : Ligne 13 – station « Saint-Denis Université »</p>
        <p>Bus : Lignes 256 – 356 – station « Général Leclerc »</p>
        <p>Tram : Lignes T5 – station « Roger Sémat »</p>
        <p>Adresse : 4 av de Stalingrad Saint-Denis 93200</p>
        </div>

        </div>
    )
}

export default Contact
