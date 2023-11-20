import { LightningElement } from 'lwc';
export default class LifeCycleHook extends LightningElement 
{
    mylist =[];
    /// Constructor call first 
    constructor()
    {
        super();
        console.log("call constructor");
    }

    connectedCallback()
    {
        this.mylist.push("Value");
        console.log("I'm in Connectedcallbackmethod");
    }

    disconnectedCallback()
    {
        this.mylist=[];
        console.log("I'm at disconnectedcallback");
    }

    renderedCallback()
    {
        console.log("I'm at rendered callback")
    }

    errorCallback(error,stack)
    {
        console.log("Error Call back:" + error);
    }

}