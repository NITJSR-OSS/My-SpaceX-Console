import React from 'react'
import './Home.scss'
import axios from '../../axios'

export default function Home() {

    const [companyDetails,setCompanyDetails] = React.useState({})
    React.useEffect(() => {
        async function fetchCompanyDetails(){
            const req = await axios.get('/company');
            setCompanyDetails(req.data)
            console.log(req.data)
            return req;
        }
        fetchCompanyDetails();
    }, [])

    return (
        <div className='home-screen-container'>
            <div className='home-screen'>
                <div className='home-header-logo'>
                    <div className='home-header-logo-overlay'></div>
                </div>
                <div className='home-body'>
                    <h2>{companyDetails.name}</h2>
                    <h2>{companyDetails.founder}</h2>
                    <h2>{companyDetails.founded}</h2>
                    <h3>{companyDetails.summary}</h3>
                </div>
            </div>

            {/* <div className="App">
                <header className="App-header">
                    <div className="App-logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <h3>WELCOME TO SPACEX CONSOLE</h3>
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
            </div> */}
        </div>
    )
}
