import { CarDetail } from "../interfaces";
import { ADD_NEW_CAR,ADD_NEW_CAR_POST, SELECT_COMPANY_NAME } from "./constants";

export interface Action {
    type:string,
    payload: any
}

export const addNewCar = (car: CarDetail) =>{
    return {
        type:ADD_NEW_CAR,
        payload: car
    }
}

export const addNewCar_POST = (car: CarDetail) =>{
    return {
        type:ADD_NEW_CAR_POST,
        payload: car
    }
}
export const selectCompany = (companyName:string) =>{

    return{
        type:SELECT_COMPANY_NAME,
        payload:companyName
    }
}