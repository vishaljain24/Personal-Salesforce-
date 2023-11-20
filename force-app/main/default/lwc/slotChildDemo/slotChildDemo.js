import { LightningElement } from 'lwc';
export default class SlotChildDemo extends LightningElement 
{
    handlefooterChange()
    {
        const footerElem =this.template.querySelector('.slds-card_footer');
        if(footerElem)
        {
            footerElem.classList.remove('slds-hide')
        }
    }
}