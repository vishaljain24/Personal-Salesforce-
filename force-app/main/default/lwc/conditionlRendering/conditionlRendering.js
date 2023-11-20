import { LightningElement } from 'lwc';
export default class ConditionlRendering extends LightningElement 
{
    IsVisible=false;
    name;

    handleState(event)
    {
        this.IsVisible=true;
    }

    handleProp(event)
    {
        this.name=event.target.value;
    }

    get ansMethod()
    {
        return this.name==='Hello';
    }
}