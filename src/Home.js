import React from 'react';
//import "./index.css";
export default props => {
    //const [flights, setResponseData] = React.useState(props.flights);
    const [launch, setLaunch] = React.useState("Sudheer");
    const onclickbutton = ()=>{
        alert("Hi");
    }
    return <>
    <button onClick={onclickbutton}>Click me</button>
        <input type="button" value="click me" onClick={onclickbutton}/>
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
                        <button>True</button>
                        <button>False</button>                  
                    </div>
                    <div className="flight-land">
                        <h5 className="flight-landtitle">Successful Land</h5>
                        <button>True</button>
                        <button>False</button>
                    </div>
                </div>
              <div className="flight-container col-s-12 col-m-10 col-l-10 "> 
            {props.flights && props.flights.map(flight=>(
                <div className="flight-detail-container col-s-12 col-m-6 col-l-3">
                <div key={flight.flight_number} className="row flight">
                    <picture>
                        <source srcSet={flight.links.mission_patch_small} media="(max-width: 600px)"></source>
                        <source srcSet={flight.links.mission_patch} media="(min-width: 600px)"></source>
                        <source srcSet="flight.jpg"></source>
                        {/* <img src="img_flowers.jpg" alt="Flowers" style="width:auto;"></img> */}
                        <img src={flight.links.mission_patch} className="flight-img" alt={flight.mission_name} />
                    </picture>
                {/* <img src={flight.links.mission_patch} className="flight-img-" alt={flight.mission_name} /> */}
                
                <div className="flight-body">
                  <h5 className="flight-title">{flight.mission_name} # {flight.flight_number}</h5>
                  <p className="flight-launch-year">
                    Mission Ids: {flight.mission_id&&flight.mission_id.map(id=>(
                        <li>{id}</li>
                    ))}
                  </p>
                  <p className="flight-launch-year">
                    Launch Year: {flight.launch_year}
                  </p>
                  <p className="flight-launch-year">
                    Successful Launch: {String(flight.launch_success)}
                  </p>
                  <p className="flight-launch-year">
                  Successful Landing: {String(flight.rocket.first_stage.cores[0].land_success)}
                  </p>
                </div>
              </div>
              </div>
            ))}
            </div>
    </div>
    <footer>Developed by: Sudheer Kumar Tumarada</footer>
    </>
};