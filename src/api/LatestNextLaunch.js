export const getlatestNextLaunches= async ()=>{
    const latestNextLaunches=  await (await fetch('https://api.spacexdata.com/v3/launches/next')).json();
    console.log(latestNextLaunches);
    return latestNextLaunches;
}