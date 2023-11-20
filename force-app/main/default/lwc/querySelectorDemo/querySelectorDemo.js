import { LightningElement } from 'lwc';
export default class QuerySelectorDemo extends LightningElement 
{
    username=['John','Smith','Vishal','Piyush','Harish']
    fetchDetailHandler()
    {
        const elem=this.template.querySelector('h1')
        elem.style.border="1px solid red" /// dynamic style on click of button
        console.log(elem.innerText)

        const userElements=this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title",item.innerText)
        })

        //lwc:dom='manual' demo
        const childElem= this.template.querySelector('.child')
        childElem.innerHTML='<p>Hey I am a Child Element</p>'
    }

}