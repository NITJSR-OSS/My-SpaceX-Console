
export const getlatestNextLaunches= async flight_number=>{
    const latestNextLaunches=  await (await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)).json();
    console.log(latestNextLaunches);
    return latestNextLaunches;
}