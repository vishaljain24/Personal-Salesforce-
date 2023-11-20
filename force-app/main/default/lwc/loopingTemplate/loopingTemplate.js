import { LightningElement } from 'lwc';
export default class LoopingTemplate extends LightningElement 
{
    carlist=['ford','Audi','Mercedes','Porshe'];

    bestcar=
    [
        {
            id: 1,
            name:'Porshe',
            speed:300
        },
        {
            id:2,
            name:'BMW',
            speed:200
        },
        {
            id:3,
            name:'Mercedes',
            speed:250
        }
    ];
}