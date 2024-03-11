import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Countries.css";
import { addToLs, checkLs } from "../../utilities/Utilities";

const Contries = () => {

    const [countries ,setCountries] = useState([]);
    // const [selectCountry , setSelectCountry] = useState([]);
    const [countryName , setCountryName] =useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    useEffect(()=>{
       
        if(countries.length>0){
            
            const localStorageGetData = checkLs();

            let saveCountry = [];
            for(const c3 of localStorageGetData){
                const seletLsByData = countries.find(caa =>caa.cca3===c3);
                saveCountry.push(seletLsByData);
            }
           
            setCountryName(saveCountry);
        
        }
    },[countries])

const selectCntry = (country)=>{
    const newSelectCountry = [...countryName , country];
    setCountryName(newSelectCountry);
    addToLs(country.cca3)
    // console.log(country);
}




    return (
        <div>
             <h3>countries {countries.length}</h3>
             <div>
                <ul>
                {
                    countryName.map((select , idx) =><li key={idx}> {select.name.common}</li>)
                }
                </ul>
                {
                    countryName.map((flag , index) =><img className="imgWide" key={index} src={flag.flags.png}></img>)
                }
             </div>
           <div className="grid">
           {
                countries.map(country =><Country
                key={country.cca3}
                country={country}
                selectCntry={selectCntry}
                ></Country>)
             }
           </div>
        </div>
    );
};

export default Contries;