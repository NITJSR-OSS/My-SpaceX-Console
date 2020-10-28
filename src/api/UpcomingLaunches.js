export const getUpcomingLaunches= async ()=>{
    const upcomingLaunches=  await (await fetch('https://api.spacexdata.com/v4/launches/upcoming')).json();
    
    return upcomingLaunches;
}