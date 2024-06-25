const greetingsList = [
    'Hello World!',
    'Namaste!',
    'Bonjur Monde!',
    'Hallo Welt!'
]

function changeGreeting(){
    const randomIndex = Math.floor(Math.random() * greetingsList.length)
    const randomGreeting = greetingsList[randomIndex]
    document.getElementById("greetingText").textContent = randomGreeting.toString()
}