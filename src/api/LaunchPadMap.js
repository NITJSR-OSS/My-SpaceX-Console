export const getLaunchPadMap= async ()=>{
    const latestLaunches=  await (await fetch('https://api.spacexdata.com/v4/launchpads')).json();
    console.log(latestLaunches);
    return latestLaunches;
}