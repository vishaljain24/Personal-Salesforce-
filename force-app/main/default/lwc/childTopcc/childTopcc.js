import { LightningElement,api } from 'lwc';
export default class Child_P2C extends LightningElement 
{
    @api percentage;

    get stylelo()
    {   
        return this.percentage;
    }
}