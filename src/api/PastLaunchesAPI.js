export const getPastLaunches= async page=>{
    const pastLaunches=  await (await fetch(`https://api.spacexdata.com/v4/launches/past`)).json();
    console.log(pastLaunches);
    return pastLaunches;
}
//?limit=30&offset=${10*(page-1)}`