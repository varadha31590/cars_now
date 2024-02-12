import { useEffect, useState } from "react";

import { Company } from "../interfaces";


const CompaniesList = ({handleSelection}:any) => {

    const [companies, setCompanies] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/companies")
            .then(res => res.json())
            .then(data => setCompanies(data));
    }, []);

    const handleCarClick = (event: React.MouseEvent<HTMLElement>) => {
        let c = event.currentTarget.getAttribute('data-company');
        console.log("Company is ", c);
        handleSelection(c);
    }

    return (
        <div>
            <div className="companies_list">
                {companies.length > 0 ? (

                    companies.map((comp: Company) =>
                        <div key={comp.company_name} className="car" onClick={handleCarClick} data-company={comp.company_name}>
                            <img src={comp.logo} alt={comp.company_name} />
                            <div>{comp.company_name}</div>
                        </div>
                    )
                ) : <h4>Loading...</h4>
                }
            </div>
        </div>
    );

}

export default CompaniesList;