import { LightningElement,wire } from 'lwc';
import getAccountlist from '@salesforce/apex/AccountController.getAccountlist';
export default class WirewithFunctionApex extends LightningElement 
{
    accounts;
    error;

    @wire(getAccountlist)
    wiredAccounts({error,data})
    {
        if(data)
        {
            this.accounts=data;
            this.error=undefined;
        }
        else if(error)
        { 
            this.accounts=undefined;
            this.error=error;
        }
    }
}