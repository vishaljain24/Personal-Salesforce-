import { LightningElement } from 'lwc';
export default class Parent_P2C extends LightningElement 
{
    percentage=20;

    handlechange(event)
    {
        this.percentage=event.target.value;
    }

}