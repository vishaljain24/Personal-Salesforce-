import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class WireWithFunction extends LightningElement 
{
    @api recordId;
    error;
    accounts;
    @wire(getRecord,{ recordId:'$recordId',fields:["Account.Name"]})
    wiredAccount({data,error})
    {
        if(data)
        {
            this.accounts=data;
            console.log("data using wire function");
        }
        else if(error)
        {
            this.error=error;
            console.log("error using wire function");
        }
    }

}