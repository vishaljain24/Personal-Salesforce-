import { LightningElement,wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {MessageContext,publish} from 'lightning/messageService';
export default class LmsCompA extends LightningElement 
{
    inputValue
    @wire( MessageContext) context;

    inputHandler(event)
    {
        this.inputValue =event.target.value
    }

    publishMessage(event)
    {
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        //publish(messageContext,messageChannel,message)
        publish(this.context,SAMPLEMC,message) 
    }
}