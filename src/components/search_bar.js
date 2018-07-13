import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super (props)

    this.state = {term : "",
    id :""
    };

  }

    onChange(event){
      this.setState ({
        term : event.target.value
      })
      this.onInputChange(this.state.term);
    }

    onInputChange (term){
      console.log(term);
      const target = term.target.value;
      this.setState({target})
      this.props.searchingVideo(target);
    }

    render (){

      return (
        <div className = "search-bar">
        <br/>
        <form onSubmit = {this.onChange}>
        <input /><br/><br/>
        </form>
        </div>
      )
    }
}

export default SearchBar;
