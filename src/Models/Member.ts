import { Evt } from "./Evt";

//objectif de meodele c de faire le casting (forcing de type)
export interface Member{
    tabEvt: any;
    id:string;
    cin:string;
    name:string;
    type:string;
    createdDate:string; 
    tabEvent:Evt[];
}