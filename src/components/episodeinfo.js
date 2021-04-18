import React from 'react';
import {Link} from "react-router-dom";
import { AC_CHARACTER_INFO , AC_EPISODE_INFO} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Episodeinfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                       statuserror             : false,
                     }
        
      }
      
      componentWillMount() {
        const id = this.props.match.params.id;
        this.props.episodeInfo(id);
      }
    render(){
        const id = this.props.match.params.id;
        var episode_Info = [];
        episode_Info = this.props.SeriesReducer.episodeInfo[0];
        if(episode_Info.characters.length >0){
        var characters_info = episode_Info.characters.map((o,index)=>{
            return(
        <p key={index}>
            {o}
        </p>)
        })
        
        
    
    }

        return(
            <main id="main">         
            <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>Episode Details</h2>
                <ol>
                    <li><Link to='/'>Home</Link></li>
                    <li>Episode  Details</li>
                </ol>
                </div>

            </div>
            </section>


            <section id="portfolio-details" className="portfolio-details">
            <div className="container">

                <div className="row gy-4">

                <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">

                        <div className="swiper-slide">
                        <strong>Characters that are involved in this episode:</strong>
                        <div style={{marginLeft:"27px"}}>{characters_info}</div>
                        </div>                        

                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>Episode Information</h3>
                    <ul>
                        <li><strong>Title</strong>: {episode_Info.title}</li>
                        <li><strong>Season</strong>: {episode_Info.season}</li>
                        <li><strong>Air date</strong>: {episode_Info.air_date}</li>
                        <li><strong>Episode</strong>: {episode_Info.episode}</li>
                        <li><strong>Series</strong>: {episode_Info.series}</li>

                    </ul>
                    </div>
                    
                </div>

                </div>

            </div>
            </section>

            </main>
        );
    }

}
function mapStateToProps(state) {
	return {
        SeriesReducer	   : state.SeriesReducer
	};

  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({episodeInfo: AC_EPISODE_INFO,characterInfo: AC_CHARACTER_INFO},dispatch)
  }
  const EpisodeinfoComponent = connect(mapStateToProps,mapDispatchToProps)(Episodeinfo);

export default EpisodeinfoComponent;

