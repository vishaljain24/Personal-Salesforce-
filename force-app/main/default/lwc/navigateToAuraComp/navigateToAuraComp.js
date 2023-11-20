import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToAuraComp extends NavigationMixin(LightningElement)
{
    navigateToAura()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:"c__navigationAura"
            },
            state:{
                "c__id":'123912908293801'
            }
        })
    }
}