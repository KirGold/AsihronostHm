//?Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. 
//?Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

/*let count = 0
let intervalId = setInterval(() => {
    count++
    console.log(`Notification ${count}`)
    if (count === 5) {
        clearInterval(intervalId)
        console.log("Finished")
    }
}, 1000)*/


//?Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, 
//?положення чи стилі через певний інтервал за допомогою setInterval.


// let boxes = document.querySelectorAll('.box')
// let container = document.querySelector('.container')

// let containerWidth = container.offsetWidth
// let containerHeight = container.offsetHeight

// let positionX = 0
// let positionY = 0
// let size = 50
// let direction = 1

// let intervalId = setInterval(() => {
//     boxes.forEach((box, index) => {
//         positionX += 5 * (index + 1)
//         positionY += 3 * (index + 1)
//         size += 0.5 * direction

//         box.style.transform = `translate(${positionX}px, ${positionY}px)`
//         box.style.width = `${size}px`
//         box.style.height = `${size}px`

//         if (size > 100 || size < 50) {
//         direction *= -1;
//         }
//     })
//     if (positionX + size > containerWidth || positionY + size > containerHeight) {
//         clearInterval(intervalId)
//         console.log("Animation ends")
//     }
// }, 50)

//?Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, 
//?використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

    // let box = document.querySelector('.box');
    // let scoreDisplay = document.getElementById('score')
    // let gameOverDisplay = document.getElementById('gameOver')
    // let finalScoreDisplay = document.getElementById('finalScore')
    // let score = 0;
    // let gameDuration = 10 * 1000

    // function moveBox() {
    //     let containerWidth = window.innerWidth - 50
    //     let containerHeight = window.innerHeight - 50
    //     let randomX = Math.floor(Math.random() * containerWidth)
    //     let randomY = Math.floor(Math.random() * containerHeight)
        
    //     box.style.left = `${randomX}px`
    //     box.style.top = `${randomY}px`
    // }

    // box.addEventListener('click', () => {
    //     score++
    //     scoreDisplay.textContent = score
    //     moveBox()
    // })

    // let intervalId = setInterval(moveBox, 1000)

    // setTimeout(() => {
    //     clearInterval(intervalId)
    //     box.style.display = 'none'
    //     gameOverDisplay.style.display = 'block'
    //     finalScoreDisplay.textContent = score
    // }, gameDuration)

    //?Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. 
    //?Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлен.


    function startTimer() {
        let timeInput = document.getElementById('timeInput').value
        let message = document.getElementById('message')
        
        let timeInSeconds = parseInt(timeInput)
        message.textContent = ""
        setTimeout(() => {
            message.textContent = `Time is up! ${timeInSeconds} seconds!!`
        }, timeInSeconds * 1000)
    }