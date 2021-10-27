import React, { useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

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

      <Filter filter={newFilter} handleFilter={handleFilter}/>
    
      <h3>Add a new number</h3>

      <PersonForm
        onSubmit={addPerson}
        inputName={newName}
        handleNameChange={handleNameChange}
        inputNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
        {filterPerson.map(person =>
          <Numbers key={person.name} person={person}/>
        )}
    
    </div>
  )
}

export default App