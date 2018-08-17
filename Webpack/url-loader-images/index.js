import './styles.css'
import webpackLogo from './webpack-logo.png'
import { firstMessage, delayedMessage } from './message.js'
document.write('Hola mundo!')
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', webpackLogo)
document.body.append(img)

console.log('Hola mundo!, desde webpack')
console.log(firstMessage)