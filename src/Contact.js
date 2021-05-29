import axios from 'axios';
import React,{useState} from 'react'
import "./contact.css"
export default function Contact() {
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const sendMessage = async (e) =>
    {
        e.preventDefault(); //evita que se envie el formulario vacio
        axios.post("/api/enviarContacto",
        {
            name:name,
            message:message
        }
            
        );
        console.log(name+"////"+message);
        setName("");
        setMessage("");
    }
    return (
        <div className="contact">
            <h1 className="contact__title">Contacto</h1>
            <form className="contact__form">
                <input name="nombre" placeholder="nombre"  className="contact__form_nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                <textarea className="contact_form__descr" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Ecribenos tu mensaje, nos pondremos en contacto con vos" />
                <button className="contact__form__enviar" onClick={sendMessage}>Enviar </button>
            </form>
        </div>
    )
}
