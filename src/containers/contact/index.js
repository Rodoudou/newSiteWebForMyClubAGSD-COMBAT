import React from 'react';
import Map from '../../components/map';
import '../../App.css';
import FacebookPage from '../../components/FacebookPage';

const Contact=({name,setName,email,setEmail,message, setMessage})=> {

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email)
    };

    const HandleChangeName = (e)=>{
        const name = e.target.value;
        setName(name);
        console.log(e.target.value)
    };

    const HandleChangeEmail = (e)=>{
        const email = e.target.value;
        setEmail(email);
        console.log(e.target.value)
    };

    const HandleChangeMessage = (e)=>{
        const message = e.target.value;
        setMessage(message);
        console.log(e.target.value)
    };


    console.log('name =>', name);
    console.log('email =>', email);
    console.log('message =>', message);

    return (
        <div className="contact">
        <FacebookPage/>
        <div className="contact-content">
        <div className="contacts">

         <h2>Nous contacter</h2>
         <br/>
        <p>Tél : 06 15 37 71 51 (Professeur, responsable de la section)</p>
        <br/>
        <p>Tél : 01 48 26 39 11 (Secrétariat)</p>
        </div>


        <div className="formulaire">
        
            <form onSubmit={handleSubmit} action="Post" type="submit">

            <input onChange={HandleChangeName} required type="text" placeholder="Nom..." value={name}/>

            <input onChange={HandleChangeEmail} required type="email" placeholder="Email..." value={email}/>

            <textarea onChange={HandleChangeMessage} placeholder="Message..." rows="6" cols="33"/>

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
        
        <div className="acces-map">
            <h2>ACCÈS</h2>
        <Map />
        </div>
        </div>

        </div>
    )
}

export default Contact
