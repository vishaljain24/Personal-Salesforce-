import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshController.getContactList'
import {updateRecord} from 'lightning/uiRecordApi'
import {refreshApex} from '@salesforce/apex'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
const columns=[
    {label:'First Name',fieldName:'FirstName',editable:true},
    {label:'Last Name',fieldName:'LastName',editable:true},
    {label:'Email',fieldName:'Email',type:'email'}
]
export default class RefershDemoLwc extends LightningElement 
{
    @wire(getContactList) contact
    draftValues=[]
    columns=columns

    handleSave(event)
    {
        console.log(event.detail.draftValues)
        const recordInputs=event.detail.draftValues.slice().map(draft=>{
            const fields =Object.assign({},draft)
            return {fields}
        })

        console.log('recordInputs',recordInputs)

        const promises = recordInputs.map(recordInput => updateRecord(recordInput))

        Promise.all(promises).then(result=>{
            this.showToastMsg('Success','Contact updated Successfully')
            this.draftValues=[]
            return refreshApex(this.contact)
        }).catch(error=>{
            this.showToastMsg('Error creating record',error.body.message,error)
        })

    }

    showToastMsg(title,message,variant)
    { 
        this.dispatchEvent(
            new ShowToastEvent({
                title:title,
                message:message,
                variant:variant || 'success'
            })
        )
    }
}
 