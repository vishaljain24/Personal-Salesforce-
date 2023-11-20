import { LightningElement,wire,api } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireProperties extends LightningElement 
{
    @api recordId;

    @wire( getRecord,{ recordId:'$recordId', fields:[ACCOUNT_NAME_FIELD]}) recordstore;

    get name()
    {
        return getFieldValue( this.recordstore.data ,ACCOUNT_NAME_FIELD);
    }
}