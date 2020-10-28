export const getLatestLaunches= async ()=>{
    const latestLaunches=  await (await fetch('https://api.spacexdata.com/v3/launches/latest')).json();
    console.log(latestLaunches);
    return latestLaunches;
}