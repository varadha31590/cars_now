import { CarDetail } from "./interfaces";

export class Helper {
    public static getAllLocations(allCars: CarDetail[]): string[] {
        let uniqueLocations = allCars
            .map((obj) => obj.location)
            .filter((item, i, ar) => ar.indexOf(item) === i && item !== "");
        return uniqueLocations;
    }

    public static getAllModels(allCars: CarDetail[]): string[] {
        let uniqueModels = allCars
            .map((obj) => obj.model)
            .filter((item, i, ar) => ar.indexOf(item) === i && item !== "");
        return uniqueModels;
    }

    public static getAllNumOfOwners(allCars: CarDetail[]): number[] {
        let uniqueOwnerNumbers = allCars
            .map((obj) => obj.numOfOwners)
            .filter((item, i, ar) => ar.indexOf(item) === i)
            .sort();
        return uniqueOwnerNumbers;
    }

    public static getAllTransmission(allCars: CarDetail[]): string[] {
        let uniqueTransmission = allCars
            .map((obj) => obj.transmission)
            .filter((item, i, ar) => ar.indexOf(item) === i)
            .sort();
        return uniqueTransmission;
    }

    public static getFilteredData(allCars: any, filterCondition: any): CarDetail[] {

       // filterCondition = { ...filterCondition, model: filterCondition.model.toString() }

        let result = allCars
            .filter((item: any) => filterCondition.location === item.location)
            .filter((item: any) => {
                if (filterCondition.model.length > 0)
                    return filterCondition.model.includes(item.model);
                else
                    return true;
            })
            .filter((item:any) => {
                if(filterCondition.numOfOwners)
                    return filterCondition.numOfOwners === item.numOfOwners;
                else
                    return true;
            })
            .filter((item:any) =>{
                if(filterCondition.transmission)
                return filterCondition.transmission === item.transmission;
            else
                return true;
            });

        return result;
    }

    public static validateModels(dataModel: string, filterModel: string): boolean {
        if (filterModel.length > 0)
            return filterModel.includes(dataModel);
        return false;
    }
}
