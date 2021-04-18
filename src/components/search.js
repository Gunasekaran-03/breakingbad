import React from 'react';
import {Link} from "react-router-dom";
import { AC_LIST_EPISODE , AC_LIST_CHARACTER} from '../actions/seriesaction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';


class Search extends React.Component{
  constructor(){
    super();

    this.state={
      search:null,      
      currentPage: 1,
      todosPerPage: 3
    };
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  handleClick=(data) =>{
    this.setState({
      currentPage: Number(data.selected)+1
    });
  }  
  componentDidMount(){
    
  }
    render(){
      
      var character_List = [];
      var renderTodos = []
      var data_=[]
      var count = 0;
      if(this.props.SeriesReducer.characterList)
      {
        character_List= this.props.SeriesReducer.characterList;  
         const {currentPage, todosPerPage } = this.state; 
         const items = character_List.filter((data)=>{
          if(this.state.search == null)
              return null
          else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.nickname.toLowerCase().includes(this.state.search.toLowerCase())){
            data_.push(data)            
            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
            const currentTodos = data_.slice(indexOfFirstTodo, indexOfLastTodo);
            renderTodos = currentTodos.map((todo, index) => {          
            return (
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index} > 
                <div className="member" data-aos="fade-up" >
                  <Link to = {"Characterinfo/"+todo.char_id}>
                  <div className="member-img" >
                    <img src={todo.img} className="img-fluid" style={{height:"224",width:"364.28"}} alt=""/>
                  </div>
                  <div className="member-info">
                    <h4><strong>{todo.name}</strong></h4>
                    <span><strong>({todo.nickname})</strong></span>
                  </div>

                  </Link>
                </div>
              </div>
            );
            });

            count = 0;
            for (let i = 1; i <= Math.ceil(data_.length / todosPerPage); i++) {
              count = count+1; 
            }                       
          }
        })
      }
  

        return(
            <>
              <section id="team" className="team">
                <div className="container">
                  <div className="section-title" data-aos="zoom-out">
                    <h2>Character Search </h2>
                    <div className="col-md-7 form-group">
                      <input type="text" name="char_name" className="form-control" id="name" placeholder="Search by Name" required onChange={(e)=>this.searchSpace(e)}/>
                    </div>
                  </div>
                  <div className="row">                                         
                        {renderTodos} 
                        {count >1 && renderTodos.length > 0 ?               
                        <div className="pagination" style={{padding:"10px"}}>
                          
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
                        </div> :""} 

                  </div>
                  {
                    this.state.search != null && renderTodos.length > 0 ?
                    <h2>
                      *please click on the character to know more about them
                    </h2>:""
                  }
                  {
                    this.state.search != null && renderTodos.length <= 0 ?
                    <h2>
                      No data found :(
                    </h2>:""
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
  const SearchComponent = connect(mapStateToProps,mapDispatchToProps)(Search);

export default SearchComponent;
