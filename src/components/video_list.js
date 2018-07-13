import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import VideoListItem from './video_list_item';

class VideoList extends Component {

  handleClick = () => {
  alert('You have clicked on me');
  }

  render(){
    const videoItems = this.props.videos.map(video => {
      return (
        <div key = {video.etag}>
        <VideoListItem
          selectedVideo = {this.props.videoSelected}
          video={video}/>
        </div>
      )
    });
    console.log("AAAA: ",videoItems);

    return (
      <div>
        <ul className = "col-md-4 list-group">

          {videoItems}
        </ul>
        <Panel onClick={this.handleClick}>
          <Panel.Body>
          <center>Basic panel example</center></Panel.Body>
        </Panel>
      </div>
    );
  }
}


export default VideoList;
