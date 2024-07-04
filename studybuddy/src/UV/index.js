import '../style.css'
import { useState, useEffect } from 'react'
function UV() {
    const [currentUVIndex, setCurrentUVIndex] = useState(null);
    const [uvForecast, setUvForecast] = useState([]);

    // useEffect(() => {

    // const forecastUVdata = async () => {
    //     try {
    //         var myHeaders = new Headers();
    //         myHeaders.append("x-access-token", "openuv-vay3rly6d8264-io");
    //         myHeaders.append("Content-Type", "application/json");

    //         var requestOptions = {
    //             method: 'GET',
    //             headers: myHeaders,
    //             redirect: 'follow'
    //         };

    //         const response = await fetch("https://api.openuv.io/api/v1/forecast?lat=24.97&lng=67.05&alt=100&dt=", requestOptions)

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         //console.log(data.result[0].uv);

    //         setCurrentUVIndex(Math.round(data.result[0].uv));  // Extract the first UV index value
    //         // Extract UV forecast values
    //         const forecast = data.result.slice(0, 8).map(item => Math.round(item.uv));
    //         console.log(forecast);
    //         setUvForecast(forecast);



    //     } catch (error) {
    //         console.error('Error fetching UV data:', error);
    //     }


    // };
    // // //     // fetchUVData();
    // forecastUVdata();
    // }, []);


    return (
        <>

            <div className='upper'>
                <h1 className='heading'>Sun Safety App</h1>
                <p className='para1'>Prepare for sunny weather</p>
            </div>
            <div className='measure'>

                <div className='currentUV'>
                    <p className='para'>Current UV Index</p>

                    <p className='now'>
                        {currentUVIndex}
                    </p>
                    <div class="sunbeams">
		  <div class="beam beam1"></div>
		  <div class="beam beam2"></div>
		  <div class="beam beam3"></div>
		  <div class="beam beam4"></div>
		  <div class="beam beam5"></div>
		  <div class="beam beam6"></div>
		  <div class="beam beam7"></div>
		  <div class="beam beam8"></div>
		</div>
                </div>
                <div className='LMHE'>
                    <div className='Low'>Low</div>
                    <div className='Medium'>Medium</div>
                    <div className='High'>High</div>
                    <div className='Extreme'>Extreme</div>

                </div>
            </div>
            <div className='week'>
                <h2>UV Index Forcast</h2>
                <div className='days'>
                    {uvForecast.length > 0 && (
                        <>
                            <div className='day1'> {uvForecast[1]}</div>
                            <div className='day2'> {uvForecast[2]}</div>
                            <div className='day3'> {uvForecast[3]}</div>
                            <div className='day4'> {uvForecast[4]}</div>
                            <div className='day5'>{uvForecast[5]}</div>
                            <div className='day6'> {uvForecast[6]}</div>
                            <div className='day7'>{uvForecast[7]}</div>
                        </>
                    )}

                </div>

            </div>

            <div className='reminder'>
                <h2>Suncreen Reminders</h2>
                <div className='reminder1'>
                    <input type='checkbox' id='On' />
                    <label for='On'>On</label>

                </div>
                <div className='reminder2'>
                    <input type='checkbox' id='Off' />
                    <label for='Off'>Off</label>
                </div>


            </div>



        </>
    )
}

export default UV;
