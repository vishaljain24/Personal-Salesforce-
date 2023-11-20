import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement)
{
    navigateToRelatedList()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015j00000Or3i4AAB',
                objectApiName:'Account',
                relationshipApiName:'Opportunities',
                actionName:'view'
            }
        })
    }
}