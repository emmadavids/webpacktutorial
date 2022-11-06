import menu from "./menu";
import about from "./about";

function init() { 
    
const element = document.createElement('div');
element.className('element')
mainCont.appendChild(element)
// const tab1 = document.createElement('div').textContent = "home"
const tab2 = document.createElement('div').textContent = "menu"
const tab3 = document.createElement('div').textContent = "about"

const header = document.createElement('h1')
header.textContent = "Welcome to Emma's vegan home page"

console.log("fired")


const tabcontainer = document.createElement('div')
element.append(header, tab2, tab3, tabcontainer)
tab3.addEventListener('click', about)
tab2.addEventListener('click', menu)

}

export default init