
import { useState } from 'react';
import './country.css';
const Country = ({country,selectCntry}) => {
    // console.log(country)
    const {name , flags,population , cca3} = country;
    const [visite , setVisite] = useState(false);
    
    const visitedCountry = ()=>{
        setVisite(!visite);
        console.log(visite);
    }

    




    return (
        <div className={`box ${visite?'bgColor' :''}`}>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h2>population: {population}</h2>
            <p>zip code : {cca3}</p>
            <button onClick={visitedCountry}>{visite? 'visited' : 'Going'}</button>
            <p>{visite ? 'I have visited' : 'I want to visited'}</p>
            <button onClick={()=>{selectCntry(country)}}>select country</button>
        </div>
    );
};

export default Country;