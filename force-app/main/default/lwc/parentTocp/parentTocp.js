import { LightningElement } from 'lwc';
export default class ParentTocp extends LightningElement 
{
    handleClick(event)
    {
        this.template.querySelector("c-child-toparentc").refresh();
    }
}