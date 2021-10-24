import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])   
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('') 
  const [ newFilter, setNewFilter ] = useState('')   

  const addPerson = (event) => {
    event.preventDefault()

    const checkDuplicate = persons.find(person => person.name === newName);
    if (!checkDuplicate) {
      const personObject = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filterPerson = !newFilter
   ? persons
   : persons.filter(( person ) => person.name.toLowerCase().includes(newFilter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>

        <div>
        Filter shown with: <input value={newFilter}
            onChange={handleFilter}/><br/>
        </div>
    
      <h2>Add a new number</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName}
            onChange={handleNameChange}/><br/>
          Number: <input value={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
        {filterPerson.map(person =>
          <Numbers key={person.name} person={person}/>
        )}
        
    
    </div>
  )
}

export default App