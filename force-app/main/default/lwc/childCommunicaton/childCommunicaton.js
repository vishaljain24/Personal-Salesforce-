import { LightningElement } from 'lwc';
export default class ChildCommunicaton extends LightningElement 
{
    endValue=5;
    msg='';
    handleClick(event)
    {
        // this.dispatchEvent(new CustomEvent("increasecount"));
        const myeventvalue=new CustomEvent('increasecount',{
            detail: {
                endValue:this.endValue,
                msg:"Hello everyone"
            }
        })

        this.dispatchEvent(myeventvalue);
    }
}