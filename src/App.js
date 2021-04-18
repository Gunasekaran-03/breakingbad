import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Header from './components/header';
import Season from './components/seasons';
import Seasoninfo from './components/seasoninfo';
import Characterinfo from './components/characterinfo';
import Episodeinfo from './components/episodeinfo';
import NotFound from './components/404';

import { AC_LIST_EPISODE , AC_LIST_CHARACTER} from './actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class App extends React.Component{
  componentDidMount(){
    this.props.characterList();
    this.props.episodeList();
}
  
  render(){
   
    return(
      <Router>
        <Header/>
        <Switch>
          
            <Route exact path="/" component={Season}/>
            <Route exact path="/Seasoninfo/:id"    component={Seasoninfo}/>
            <Route exact path="/Characterinfo/:id" component={Characterinfo}/>
            <Route exact path="/Episodeinfo/:id" component={Episodeinfo}/>
            <Route component={NotFound}/>
          
        </Switch>
      </Router>
    )
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
  const AppComponent = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppComponent;

