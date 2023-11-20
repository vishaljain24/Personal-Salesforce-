import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement)
{
    recordViewMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015j00000Or3i4AAB',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015j00000Or3i4AAB',
                objectApiName:'Contact',
                actionName:'edit'   
            }
        })
    }
}