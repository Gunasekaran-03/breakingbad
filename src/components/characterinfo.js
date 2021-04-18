import React from 'react';
import {Link} from "react-router-dom";
import { AC_CHARACTER_INFO , AC_EPISODE_INFO} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Characterinfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                       statuserror             : false,
                     }
        
      }
      
      componentWillMount() {
        const id = this.props.match.params.id;
        this.props.characterInfo(id);
      }
    render(){
        const id = this.props.match.params.id;
        var character_Info = [];
        character_Info = this.props.SeriesReducer.characterInfo[0];
        if(character_Info.appearance){
        var ocupation_info = character_Info.occupation.map((o,index)=>{
            return(
        <p key={index}>
            {o}
        </p>)
        })
        var appearence_info = character_Info.appearance.map((o,index)=>{
            return(
            <p key={index}>
                {o}
            </p>
            )
        })
        var better_call_info =[]
        if(character_Info.better_call_saul_appearance.length>0){
        var better_call_info = character_Info.better_call_saul_appearance.map((o,index)=>{
            return(
            <p key={index}>
                {o}
            </p>
            )
        })}
        else{
        better_call_info.push(
            <p>
                None
            </p>)
        }
    
    }

        return(
            <main id="main">         
            <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>Character Details</h2>
                <ol>
                    <li><Link to='/'>Home</Link></li>
                    <li>Character Details</li>
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
                        <img src={character_Info.img} style={{height:"800px"}} alt=""/>
                        </div>                        

                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="portfolio-info">
                    <h3>Character Information</h3>
                    <ul>
                        <li><strong>Name</strong>: {character_Info.name}</li>
                        <li><strong>Birthday</strong>: {character_Info.birthday}</li>
                        <li><strong>Status</strong>: {character_Info.status}</li>
                        <li><strong>Nickname</strong>: {character_Info.nickname}</li>
                        <li><strong>Category</strong>: {character_Info.category}</li>
                        <li><strong>Portrayed</strong>: {character_Info.portrayed}</li>

                    </ul>
                    </div>
                    <div className="portfolio-description">
                    <h2>Character details</h2>
                    <li><strong>Ocuupations that {character_Info.name} has done</strong></li>
                    <div style={{marginLeft:"27px"}}>{ocupation_info}</div>
                    <li><strong>Seasons that {character_Info.name} has appeared</strong></li>
                    <div style={{marginLeft:"27px"}}>{appearence_info}</div>
                    <li><strong>Better call saul appearance that {character_Info.name} has done</strong></li>
                    <div style={{marginLeft:"27px"}}>{better_call_info}</div>
                    
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
  const CharacterinfoComponent = connect(mapStateToProps,mapDispatchToProps)(Characterinfo);

export default CharacterinfoComponent;

