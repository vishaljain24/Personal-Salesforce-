import { LightningElement,wire } from 'lwc';
import filterAccounttypebytype from '@salesforce/apex/AccController.filterAccounttypebytype'
export default class WireApexWithPara extends LightningElement 
{
    selectedType=''
    @wire(filterAccounttypebytype, {type:'$selectedType'})
    filterAccounts

    get typeOptions()
    {
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }

    typeHandler(event)
    {
        this.selectedType = event.target.value
    }
}