import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class WirePicklistValuesByRecordType extends LightningElement 
{
    ratingOptions=[]
    industryOptions=[]
    selectedIndustry=''
    selectedRating=''

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo
    
    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,
                recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
        picklistHandler({data,error})
        {
            if(data)
            {
                console.log(data)
                this.ratingOptions =this.generatePicklist(data.picklistFieldValues.Rating)
                this.industryOptions=this.generatePicklist(data.picklistFieldValues.Industry)
            }
            if(error)
            {
                console.error(error)
            }
        }
    
    generatePicklist(data)
    {
        return data.values.map(item=>({'label':item.label,'value':item.label}))
    }

    handleChange(event)
    {
        const {name,value}= event.target
        console.log(name + '==>' + value)
        if(name === 'industry')
        {
            this.selectedIndustry = value
        }
        if(name === 'rating')
        {
            this.selectedRating= value;
        }
    }
}


