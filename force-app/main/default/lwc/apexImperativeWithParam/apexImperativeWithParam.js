import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/AccController.findAccount'
export default class ApexImperativeWithParam extends LightningElement 
{
    accounts
    searchKey=''
    timer
    searchHandler(event)
    {
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value;
        this.timer =setTimeout(()=>{
            this.callApex()
        },1000)
    }

    callApex()
    {
        findAccount({searchKey:this.searchKey})
        .then(result=>{
            this.accounts=result
        }).catch(error=>{
            console.error(error)
        })
    }
}