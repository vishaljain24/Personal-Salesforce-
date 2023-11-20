import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.findAccount';
export default class ImperativeCallusingparams extends LightningElement 
{
    searchkey='';
    accounts;
    error;

    handleOnchange(event)
    {
        this.searchkey=event.target.value;
    }

    handleOnclick()
    {
        findAccount({keyword:this.searchkey}).then((result)=>{
            this.accounts=result;
            this.error=undefined;
        }).catch((error)=>{
            this.error=error;
            this.accounts=undefined;
        });
    }
}