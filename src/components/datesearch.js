import React from 'react';
import {Link} from "react-router-dom";
import { AC_LIST_EPISODE , AC_LIST_CHARACTER} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

class Searchbydate extends React.Component{
  constructor(){
    super();
    const today = moment()
    this.state={
      search:null,
      currentPage: 1,
      todosPerPage: 3,
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone())

    };
  }
  
  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {     
    return (
      <div>
        <div>Selection</div>
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - "}
        {this.state.value.end.format("YYYY-MM-DD")}
      </div>
    );
  };

  dateChange = (data)=>{
    var str = '';
    var len = data.length-1;
    var sum_ = parseInt(data[len-3])*1000 +parseInt(data[len-2])*100+parseInt(data[len-1])*10+parseInt(data[len]);
    for(var i = 0; i<5 ;i=i+3){
        str=str+data[i]+data[i+1]
    }
    sum_ = sum_*10000+parseInt(str);
    return sum_;
  }
  
  handleChange = (event,{name,value})=>{
      this.setState({[name]:value})
  }
  handleSelect = (ranges)=>{
    console.log(ranges);
}
  handleClick=(data) =>{
    data.selected = data.selected +1;
    this.setState({
      currentPage: Number(data.selected)
    });
  }  
  componentDidMount(){}
    render(){
        
      var episode_List = [];
      var renderTodos = []
      var data_=[]
      var count = 0;
      if(this.props.SeriesReducer.episodeList)
      {
        episode_List= this.props.SeriesReducer.episodeList;
        const {currentPage, todosPerPage } = this.state; 
        const r = this.state.value
        if(this.state.value){
        const dateRanges_s = this.state.value.start.format("MM-DD-YYYY")
        const dateRanges_e = this.state.value.end.format("MM-DD-YYYY")
        const s = this.dateChange(dateRanges_s);
        const fromADate = this.dateChange(dateRanges_s);        
        const toADate = this.dateChange(dateRanges_e)       
        const myDates = episode_List.map(f =>{  
        var date_s = this.dateChange(f.air_date)
        if(fromADate < toADate ){
            if (toADate>= date_s && fromADate<= date_s )
            { 
                data_.push(f)            
                const indexOfLastTodo = currentPage * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                const currentTodos = data_.slice(indexOfFirstTodo, indexOfLastTodo);
                renderTodos = currentTodos.map((todo, index) => {          
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index} > 
                   <Link to = {"Episodeinfo/"+todo.episode_id}>
                    <div className="member" data-aos="fade-up" >
                    <h4>{todo.episode}</h4>
                      <div className="member-info">
                        <h4>{todo.title}</h4>
                        <span>{todo.air_date}</span>
                        <span>{todo.season}</span>
                      </div>
                    </div>
                 </Link>
                  </div>
                );
                });
                count = 1;
                for (let i = 1; i <= Math.ceil(data_.length / todosPerPage); i++) {
                  count = count+1; 
                }    
            }
            else {
                return null
            }
            if(renderTodos.length == 0){
              count =-1;
                renderTodos.push(
                    <h2>No Data found :(</h2>
                )
            } 
        }
        else{
            if (toADate<= date_s && fromADate>= date_s )
            { 
                data_.push(f)            
                const indexOfLastTodo = currentPage * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                const currentTodos = data_.slice(indexOfFirstTodo, indexOfLastTodo);
                renderTodos = currentTodos.map((todo, index) => {          
                return (
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index} > 
                   <Link to = {"Episodeinfo/"+todo.episode_id}>
                    <div className="member" data-aos="fade-up" >
                    <h4>Ep.no : {todo.episode}</h4>
                      <div className="member-info">
                        <h4>{todo.title}</h4>
                        <span><p>Date aired :</p>{todo.air_date}</span>
                        <span><p>Season :</p>{todo.season}</span>
                      </div>
                    </div>
                 </Link>
                  </div>
                );
                });
                count = 1;
                for (let i = 1; i <= Math.ceil(data_.length / todosPerPage); i++) {
                  count = count+1; 
                }        
     
            }
            else {
                return null
            }
            if(renderTodos.length == 0){
              count =-1;
                renderTodos.push(
                    <h2>No Data found :(</h2>
                )
            } 
        }
       
        })
        
    }
    
    
        
    }
 
      

        return(
            <>
              <section id="team" className="team">
                <div className="container">

                  <div className="section-title" data-aos="zoom-out">
                    <h2>Search by range of date</h2>                    
                    <div>{this.renderSelectionValue()}</div>
                    <div>
                    <input
                        type="button"
                        value="Toggle date picker"
                        onClick={this.onToggle}
                    />
                    </div>

                    {this.state.isOpen && (
                    <DateRangePicker
                        value={this.state.value}
                        onSelect={this.onSelect}
                        singleDateRange={true}
                    />
                    )}
                   
                    </div>
                  <div className="row">
                  
                  {renderTodos}
                  {count >1 ?
                  <div className="commentBox">
                  <renderTodos data={episode_List} />
                  <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={count}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handleClick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  />
                  </div>     
                  :""
                  }              

                                 
                  </div>
                  {
                    count>1  && renderTodos.length > 0 ?
                    <h2>
                      *please click on the episode to know more about them
                    </h2>:""
                  }
                  {
                    count == -1  && renderTodos.length ==1 ?
                    renderTodos
                    :""
                  }
                </div>

              </section>
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
  const SearchbydateComponent = connect(mapStateToProps,mapDispatchToProps)(Searchbydate);

export default SearchbydateComponent;
