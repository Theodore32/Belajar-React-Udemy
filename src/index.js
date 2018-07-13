import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './Style/style.css';
import _ from 'lodash';

const API_KEY = "AIzaSyCCY6VZ-y3u32HxJBoAku-J5bmFCmGOYQc";

class App extends Component {
  constructor (props){
    super(props);

    this.state = {videos: []};

    this.videoSearch('Bat Reaction hearing ultrasonic');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term : term}, (data) => {
      this.setState({
        videos : data,
        selectedVideo: data[0]
      });
      console.log("data: ",data);
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} ,300);

    return (
      <div>
        <SearchBar searchingVideo = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
        videoSelected = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
