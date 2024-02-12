
import { CarDetail } from "../../interfaces";
import { Action } from "../action";
import { ADD_NEW_CAR } from "../constants";

export const carReducer = (data:CarDetail[] = [],action:Action) =>{

    switch(action.type){
        case ADD_NEW_CAR:
            return [...data,action.payload]
        default:
            return data;
    }

}



