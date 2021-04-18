import React from 'react';
import {Link} from 'react-router-dom';
class NotFound extends React.Component{
    render(){
        return(
            <>
            <main id="main">   
            <section id="portfolio-details" className="portfolio-details">
            <div className="container" style={{marginTop:"100px",marginLeft:"300px"}}>
            <h2>OOOPS!!! Page not found </h2>
            <h2>Want to return <Link to ='/'><span style={{color:"blue",fontSize:"40px"}}>home?</span></Link> </h2>

            </div>      
            </section>
            </main>
            </>

        )
    }
}
export default NotFound;