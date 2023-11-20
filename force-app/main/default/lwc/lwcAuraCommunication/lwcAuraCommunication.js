import { LightningElement,api } from 'lwc';
export default class LwcAuraCommunication extends LightningElement 
{
    @api title

    callAura()
    {
        const eve=new CustomEvent('sendmsg',{
        detail:{
            "msg":"Hello From LWC"
               }
        })
        
        this.dispatchEvent(eve);
    }
}    