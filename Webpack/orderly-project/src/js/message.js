import renderToDOM from './render-to-dom'
import makeMessage from './make-message'
const waitTime = new Promise((todoOk, todoMal) => {
    setTimeout(() => {
        todoOk('Han pasado 3 segundos')
    }, 3000)
})

module.exports = {
    firstMessage: 'Hola mundo desde un modulo' ,
    delayedMessage: async () => {
        const message = await waitTime
        console.log(message)
        renderToDOM(makeMessage(message))
    }
}