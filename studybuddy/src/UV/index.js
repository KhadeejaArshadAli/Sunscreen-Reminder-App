import '../style.css'
import { useState, useEffect } from 'react'
function UV() {
    const [currentUVIndex, setCurrentUVIndex] = useState(null);
    const [uvForecast, setUvForecast] = useState([]);

    useEffect(() => {
        // Fetch current UV index and forecast from an API
        const fetchUVData = async () => {
            try {
                var myHeaders = new Headers();
                myHeaders.append("x-access-token", "openuv-vay3rly6d8264-io");
                myHeaders.append("Content-Type", "application/json");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                const response = await fetch("https://api.openuv.io/api/v1/uv?lat=24.98&lng=67.06&alt=100&dt=", requestOptions)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCurrentUVIndex(data.result.uv)

            } catch (error) {
                console.error('Error fetching UV data:', error);
            }
        };
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

        //         const response= await fetch("https://api.openuv.io/api/v1/forecast?lat=24.97&lng=67.05&alt=100&dt=", requestOptions)

        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         const data = await response.json();
        //         console.log(data);
        //         setCurrentUVIndex(data.result[0].uv);  // Extract the first UV index value
        //         // Extract UV forecast values
        //         const forecast = data.result.slice(0, 7).map(item => item.uv);
        //         setUvForecast(forecast);
               

        //     } catch (error) {
        //         console.error('Error fetching UV data:', error);
        //     }


        // };
        fetchUVData();
        // forecastUVdata();
    }, []);


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
                    <div className='day1'>Mon</div>
                    <div className='day2'>Tues</div>
                    <div className='day3'>Wed</div>
                    <div className='day4'>Thurs</div>
                    <div className='day5'>Fri</div>
                    <div className='day6'>Sat</div>
                    <div className='day7'>Sun</div>

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
