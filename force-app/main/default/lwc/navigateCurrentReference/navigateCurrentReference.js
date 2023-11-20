import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class NavigateCurrentReference extends LightningElement 
{
    @wire(CurrentPageReference) pref

    get pageReference()
    {
        return this.pref ? JSON.stringify(this.pref,null,2):''
    }
}