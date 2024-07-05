import '../style.css'
import { useState, useEffect } from 'react'
function UV() {
    const [currentUVIndex, setCurrentUVIndex] = useState(null);
    const [uvForecast, setUvForecast] = useState([]);

    useEffect(() => {

    const forecastUVdata = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append("x-access-token", "openuv-vay3rly6d8264-io");
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const response = await fetch("https://api.openuv.io/api/v1/forecast?lat=24.97&lng=67.05&alt=100&dt=", requestOptions)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            //console.log(data.result[0].uv);

            setCurrentUVIndex(Math.round(data.result[0].uv));  // Extract the first UV index value
            // Extract UV forecast values
            const forecast = data.result.slice(0, 8).map(item => Math.round(item.uv));
            console.log(forecast);
            setUvForecast(forecast);



        } catch (error) {
            console.error('Error fetching UV data:', error);
        }


    };
  
    forecastUVdata();
    }, []);
  
    const getUVIndexClass2 = (uvIndex) => {
        if (uvIndex <= 2) return 'low';
        if (uvIndex <= 5) return 'moderate';
        if (uvIndex <= 7) return 'high';
        return 'very-high';
    };


    return (
        <>

            <div className='upper'>
                <h1 className='heading'>Sun Safety App</h1>
                <p className='para1'>Prepare for sunny weather</p>
            </div>
            <div className='measure'>

                <div className={`current-uv-index ${getUVIndexClass2(currentUVIndex)}`}>

                    <div className='inside'>
                        <h2 className='para'>Current UV Index</h2>

                        <p className='now'>
                            {currentUVIndex}
                        </p>
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
                <h2 className='fore'>UV Index Forcast</h2>
                <div className='days'>
                    {uvForecast.length > 0 && (
                    <>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[1])}`}>{uvForecast[1]}</div>
                            <div className='label'>Mon</div>

                        </div>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[2])}`}>{uvForecast[2]}</div>
                            <div className='label'>Tues</div>

                        </div>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[3])}`}>{uvForecast[3]}</div>
                            <div className='label'>Wed</div>

                        </div>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[4])}`}>{uvForecast[4]}</div>
                            <div className='label'>Thurs</div>

                        </div>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[5])}`}>{uvForecast[5]}</div>
                            <div className='label'>Fri</div>

                        </div> <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[6])}`}>{uvForecast[6]}</div>
                            <div className='label'>Sat</div>

                        </div>
                        <div className='day'>
                            <div className={`day1 ${getUVIndexClass2(uvForecast[7])}`}>{uvForecast[7]}</div>
                            <div className='label'>Sun</div>

                        </div>


                    </>
                     )} 

                </div>

            </div>




        </>
    )
}

export default UV;
