import { LightningElement } from 'lwc';
export default class QuizApp extends LightningElement 
{
    myQuestions=
    [
        {
            id:'Question1',
            question:'Which one out of these is not loop template ?',
            answers:
            {
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer:'c'
        },
        {
            id:'Question2',
            question:'Which of the following is not LWC file type ?',
            answers:
            {
                a:'.js',
                b:'.apex',
                c:'.svg'
            },
            correctAnswer:'b'
        },
        {
            id:'Question3 ',
            question:'Which of the is not a directive ?',
            answers:
            {
                a:'for:each',
                b:'if:true',
                c:'@track'
            },
            correctAnswer:'c'
        }
    ]
    selected={}; //for storing answers
    isSubmitted= 0 // to show the result
    correctAnswer=0 //to show the result

    // get allNotSelected()
    // {
    //     return !(Object.keys(this.selected).length === this.myQuestions.length)
    // }

    get IsSuccessful()
    {
        return `slds-text-color_success ${this.myQuestions.length === this.correctAnswer?
                                            slds-text-color_success :slds-text-color_error}`
    }

    changeHandler(event)
    {
        console.log("Name",event.target.name);
        console.log("Value",event.target.value);
        const {name,value}= event.target.value; 

        this.selected ={...this.selected , [name]:value}
    }

    submitHandler(event)
    {
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer= correct.length;
        this.isSubmitted=true;
        console.log("Correct Answers", this.correctAnswer)
    }

    resetHandler(event)
    {
        this.correctAnswer=0
        this.selected={}        
    }
}