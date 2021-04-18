import React from 'react';
import {Link,Redirect} from "react-router-dom";
import { AC_LIST_EPISODE , AC_LIST_CHARACTER} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AgGridReact } from 'ag-grid-react';





class Seasoninfo extends React.Component{ 
  constructor(props) {
  super(props);
  this.state = {
    columnDef: [
      {
        headerName: "#", valueGetter: "node.rowIndex + 1", width: '150',
        cellStyle: function(params) {
          return {'font-size': '16px','margin-top': '5px'};
        }
      },
      {
        headerName: "Title", field: "title", width: '200',filter:true,
        cellStyle: function(params) {
          return {'font-size': '16px','margin-top': '5px ','color':'black'};
        }
      },
      {
        headerName: "Episode", field:"episode", width: '150',
        cellRenderer: function(params) {            
          return '' + params.value 
        }
      },
      {
        headerName: "Aired date", field: "air_date", width: '270',
        cellStyle: function(params) {
          return {'font-size': '16px','margin-top': '5px'};
        }
      },
      {
        headerName: "To know more click view", width: '300', sortable:false, filter:false, template:
        `<div>
          <div class="btn btn-primary btn-sm" href="#" style={{ marginRight: "10px" }} data-action-type ="View">
            <i class="fas fa-folder" style={{ padding: "2px" }} data-action-type ="View"> </i>
            View
          </div>          
          </div>`,
         cellStyle: function(params) {
                return {'margin-top' :'8px'};
        },
      },
    ]
    }
  
}
onSortChanged = e => {
  e.api.refreshCells();
}
onRowClicked = event => {
  const rowValue = event.event.target;
  const value    = rowValue.getAttribute('data-action-type');
  if(value === 'View') {
     this.setState({redirect:'View',id:event.data.episode_id})
  }
}
componentWillMount() {
  const id = this.props.match.params.id;
  this.props.episodeList()
}

    render(){
      const id = this.props.match.params.id;
      const series_ep_list = this.props.SeriesReducer.episodeList;
      var season_list = []
      if(this.state.redirect === 'View'){
        return <Redirect to={'/Episodeinfo/'+ this.state.id} />
      }

      if(this.props.SeriesReducer.episodeList){
        var len = series_ep_list.length;
        for(var i=0;i<len;i++){
            if(series_ep_list[i].season == id)season_list.push(series_ep_list[i])
        }
      }
      console.log(" sesons listst",season_list);
        return(
            <main id="main">           
            <section class="breadcrumbs">
              <div class="container">
        
                <div class="d-flex justify-content-between align-items-center">
                  <h2>Season Info</h2>
                  <ol>
                    <li><Link to="/" >Home</Link></li>
                    <li>Season Info</li>
                  </ol>
                </div>
        
              </div>
            </section>
              
            <section class="inner-page">
              <div class="container">
              
              <div
                className="ag-theme-alpine"
                style={{ height: '600px', width: 'auto' }}>
                <AgGridReact
                  rowHeight={90}
                  rowClass={'centerAlign'}
                  onSortChanged={this.onSortChanged}


                  rowSelection={'single'}
                  onSelectionChanged={this.onSelectionChanged}
                  onRowClicked={(e)=>this.onRowClicked(e)}

                  enableSorting
                  enableFilter = {true}
                  enableColResize
                  pagination={true}
                  paginationAutoPageSize={true}
                  columnDefs={this.state.columnDef}
                  rowData={season_list}>
                </AgGridReact>
              </div >
      
                
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
    return bindActionCreators({episodeList: AC_LIST_EPISODE,characterList: AC_LIST_CHARACTER},dispatch)
  }
  const SeasoninfoComponent = connect(mapStateToProps,mapDispatchToProps)(Seasoninfo);

export default SeasoninfoComponent;
