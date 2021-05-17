import React from "react";
import ContactCard from "./components/ContactCard.jsx";
import './App.css';
import contactData from './Database/contactData.js';

function App() {
    const contactComponents = contactData.map(function(c){
        return(
            <ContactCard 
                key={c.id}
                imgUrl={c.imgUrl}
                name={c.name}
                phone={c.phone}
                email={c.email}
                adress={c.adress}
            />
        )
    });
    return (
        <div className="contacts">
            {contactComponents}
        </div>
    );
}

export default App;
