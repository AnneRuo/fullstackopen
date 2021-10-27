import React from "react";

const PersonForm = ({ onSubmit, inputName, handleNameChange, inputNumber, handleNumberChange}) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
        Name: <input value={inputName}
            onChange={handleNameChange}/><br/>

        Number: <input value={inputNumber}
            onChange={handleNumberChange}/>
        </div>

        <button type="submit">add</button>
    </form>
    )
}

export default PersonForm