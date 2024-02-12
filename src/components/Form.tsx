import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addNewCar_POST } from "../redux/action";
import { CarDetail } from "../interfaces";


//controlled form
const Form = ({ comp }: any) => {

    const dispatch = useDispatch();
    const car = useSelector((state: RootState) => state.carReducer);

    const [carData, setCarData] = useState({
        companyName: "",
        model: "",
        color: "",
        mfd: 0,
        insuranceExpiry: 0,
        totalKilometers: 0,
        location: "",
        numOfOwners: 0,
        transmission: "",
        externalFitments: "",
        photo: ""
    } as CarDetail);



    const handleSubmit = (event: any) => {

        event.preventDefault();
        dispatch(addNewCar_POST(carData));
        setCarData({
            companyName: carData.companyName,
            model: "",
            color: "",
            mfd: 0,
            insuranceExpiry: 0,
            totalKilometers: 0,
            location: "",
            numOfOwners: 0,
            transmission: "",
            externalFitments: "",
            photo: ""
        });
    }

    const onFormValueChange = (event: React.FormEvent<HTMLInputElement>) => {
        let carObj = { ...carData, [event.currentTarget.name]: event.currentTarget.value };
        setCarData(carObj);

    }
    const inputRef = useRef({} as any);

    useEffect(() => {
       setCarData({ ...carData, companyName: comp })
        inputRef.current.focus();
    }, [comp]);

    return (
        <div>
            <form className="car_form" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Company</td>
                            <td><h5>{comp}</h5></td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>
                                <input ref={inputRef} type="text" name="model" value={carData.model} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>
                                <input type="text" name="color" value={carData.color} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Year of Manufacture</td>
                            <td>
                                <input type="text" name="mfd" value={carData.mfd <= 0 ? "" : carData.mfd} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Insurance Valid upto</td>
                            <td>
                                <input type="text" name="insuranceExpiry" value={carData.insuranceExpiry <= 0 ? "" : carData.insuranceExpiry} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Kilometers run</td>
                            <td>
                                <input type="text" name="totalKilometers" value={carData.totalKilometers <= 0 ? "" : carData.totalKilometers} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>
                                <input type="text" name="location" value={carData.location} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>No of owners</td>
                            <td>
                                <input type="text" name="numOfOwners" value={carData.numOfOwners <= 0 ? "" : carData.numOfOwners} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>
                                <input type="text" name="transmission" value={carData.transmission} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>External Fitments</td>
                            <td>
                                <input type="text" name="externalFitments" value={carData.externalFitments} onChange={onFormValueChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Photo</td>
                            <td>
                                <input type="file" name="photo" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button style={{ width: "70%", padding: "10px" }}> ADD </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Form;