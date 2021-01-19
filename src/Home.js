import React from 'react';
import Flight from './Flight';
import RadioButton from './RadioButton';
//import "./index.css";
export default props => {
    const [isLaunched, setIsLaunched] = React.useState("No");
    const launchChangeHandler = (event) => {
        setIsLaunched(event.target.value);
    }
    return <>
        <header>SpacEx Launch Programs</header>
        <div className="row">
        <div className="col-s-12 col-m-2 col-l-2 flight-filter">
                    <div className="flight-launch-land-year">
                        <button onClick={()=>{console.log("hello")}}>2006</button>
                        <button>2007</button>
                        <button>2008</button>
                        <button>2009</button>
                        <button>2010</button>
                        <button>2011</button>
                        <button>2012</button>
                        <button>2013</button>
                        <button>2014</button>
                        <button>2015</button>
                        <button>2016</button>
                        <button>2017</button>
                        <button>2018</button>
                        <button>2019</button>
                        <button>2020</button>
                    </div>
                    <div className="flight-launch">
                        <h5 className="flight-launch-title">Successful Launch</h5>
                        <RadioButton 
                        changed={ launchChangeHandler } 
                        id="1" 
                        isSelected={ isLaunched === "Yes" } 
                        label="launched" 
                        value="Yes" 
                    />
                        <RadioButton 
                        changed={ launchChangeHandler } 
                        id="1" 
                        isSelected={ isLaunched === "No" } 
                        label="launched" 
                        value="No" 
                    />               
                    </div>
                    <div className="flight-land">
                        <h5 className="flight-landtitle">Successful Land</h5>
                        <button>True</button>
                        <button>False</button>
                    </div>
                </div>
              <div className="flight-container col-s-12 col-m-10 col-l-10 "> 
            {props.flights && props.flights.map(flight=>(<Flight flight={flight}></Flight>))}
               
            </div>
    </div>
    <footer>Developed by: Sudheer Kumar Tumarada</footer>
    </>
};