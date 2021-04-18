import React from 'react';
import Search from './search';
import Searchbydate from './datesearch';
import {Link} from "react-router-dom";
import { AC_LIST_EPISODE , AC_LIST_CHARACTER} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Season extends React.Component{
    
    componentDidMount(){
        this.props.characterList();
        this.props.episodeList();
    }
    render(){
        var character_List = [];
      if(this.props.SeriesReducer.characterList)
      {
          character_List= this.props.SeriesReducer.characterList;
      }
        return(
            <>
            <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div className="carousel-container" style={{marginTop:"-100px",marginBottom:"-200px"}}> 
                <h2 className="animate__animated animate__fadeInDown">Please select your <span>Season</span></h2>
            </div>
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
            
              
              <div className="carousel-item active">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown"><span>Season 1</span></h2>
                  <p className="animate__animated animate__fadeInUp">To know about Season 1 please Click Below</p>
                  <Link to='/Seasoninfo/1' className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
        
             
              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown"><span>Season 2  </span></h2>
                  <p className="animate__animated animate__fadeInUp">To know about Season 2 please Click Below</p>
                  <Link to='/Seasoninfo/2' className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
        
              
              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown"><span>Season 3 </span></h2>
                  <p className="animate__animated animate__fadeInUp">To know about Season 3 please Click Below</p>
                  <Link to='/Seasoninfo/3' className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown"><span>Season 4 </span></h2>
                  <p className="animate__animated animate__fadeInUp">To know about Season 4 please Click Below</p>
                  <Link to='/Seasoninfo/4' className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown"><span>Season 5 </span></h2>
                  <p className="animate__animated animate__fadeInUp">To know about Season 5 please Click Below</p>
                  <Link to='/Seasoninfo/5' className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
        
              <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
              </a>
        
            </div>
        
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
              <defs>
                <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
              </defs>
              <g className="wave1">
                <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
              </g>
              <g className="wave2">
                <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
              </g>
              <g className="wave3">
                <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
              </g>
            </svg>
        
          </section>
          <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                    
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <Search/>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0" >   
                                <Searchbydate/>  
                            </div>
                        </div>
                   
                </div>
            </div>
            </section>
                
                  
                <div className="swiper-pagination"></div>
              
          </>
        
        );
    }
}

function mapStateToProps(state) {
	return {
        SeriesReducer	   : state.SeriesReducer
	};

  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({episodeList: AC_LIST_EPISODE,characterList: AC_LIST_CHARACTER},dispatch)
  }
  const SeasonComponent = connect(mapStateToProps,mapDispatchToProps)(Season);

export default SeasonComponent;