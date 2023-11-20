import { LightningElement } from 'lwc';
export default class ParentListener extends LightningElement 
{
    Count=1;
    endValue=10;
    msg='';
    handleeventchange(event)
    {
        this.endValue = event.detail.endValue;
        this.msg= event.detail.msg;

        if(this.Count < this.endValue)
        {
            this.Count= this.Count +1;
        }

    }
}