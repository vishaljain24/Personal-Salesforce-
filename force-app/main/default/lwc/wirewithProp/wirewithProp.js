import { LightningElement,wire } from 'lwc';
import getAccountlist from '@salesforce/apex/AccountController.getAccountlist';

export default class WirewithProp extends LightningElement 
{
    @wire(getAccountlist) accounts;
}