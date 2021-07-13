import React from 'react'

const Header = ({ courses }) => {
    return (
      <h3>{courses.name}</h3>
    )
  }
  
const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>    
    )
}
  
const Content = ({ courses }) => {
    return (
        courses.parts.map((part) => 
        <Part key={part.id} part={part} />)
    )
}
  
const Total = ({ courses }) => {
    const sum = courses.parts.reduce((sum, parts) => {
    console.log(sum, parts)
        return sum + parts.exercises 
    }, 0)
    return (
        <p><b>total of {sum} exercises</b></p>
    )
}
  
const Course = ({ courses }) => {
    return (
        <div>
        <Header courses={courses} />
        <Content courses={courses} />
        <Total courses={courses} />
        </div>
    )
}

export default Course