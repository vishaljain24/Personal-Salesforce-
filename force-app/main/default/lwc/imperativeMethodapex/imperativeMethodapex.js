import { LightningElement } from 'lwc';
import getAccountlist from '@salesforce/apex/AccountController.getAccountlist';
export default class ImperativeMethodapex extends LightningElement 
{
    accounts;
    error;
    handleOnclick()
    {
        getAccountlist().then((result)=>{
            this.accounts=result;
            this.error=undefined;
        }).catch((error)=>{
            this.error=error;
            this.accounts=undefined;
        });
    }
}