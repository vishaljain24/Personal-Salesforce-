import { LightningElement,track } from 'lwc';
export default class TwoWayDataBinding extends LightningElement 
{
    role='Salesforce Developer'
    city='Hyderabad'

    num1=10;
    num2=20;

    arr=[10,20,30]

    obj={
        name:'Rahul',
        age:'24'
    }

    changeHandler(event)
    {
        this.city=event.target.value;
    }

    trackHandler(event)
    {
        // this.obj.name= event.target.value;
        this.obj ={...this.obj, name: event.target.value}; ///spread Operator
    }

    get arrayEle()
    {
        return this.arr[0]
    }
    get multiplyOut()
    {
        return this.num1 * this.num2;
    }


}