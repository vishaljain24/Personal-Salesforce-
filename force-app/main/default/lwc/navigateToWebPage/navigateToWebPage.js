import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToWebPage extends NavigationMixin(LightningElement) 
{
    navigateToWeb()
    {
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes:{
            url:"https://www.linkedin.com/in/vishal-jain-61a542172/"
            }
        })
    }
}