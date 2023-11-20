import { LightningElement } from 'lwc';
export default class HelloPublic extends LightningElement 
{
    name='Vishal'
    age=20
    title='salesforce'

    objname={
        name:'Vishal',
        age:'24'
    }

    arrstor=['A','B'];
    
    changeHandler(event)
    {
        this.title=event.target.value; 
    }
}
