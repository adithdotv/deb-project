import React from 'react'

const Greetings = () => {
  return (
    <div>
      <p className="font-bold text-2xl py-4 " id="greetingText">Hello World..!!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6" onclick="changeGreeting()">Change Greetings</button>
    </div>
  )
}

export default Greetings
