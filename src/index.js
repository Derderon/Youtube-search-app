import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/Video_detail';

const API_KEY = 'AIzaSyBn1JmSqZ0yGgBxkrxLofJhzBo9v1Yf-OM';

// Create a new component
// This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // when a key and a value are same string we can use ES6 syntax ({ videos })
      // instead of ({ videos: videos })
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
      });
      // videos arrive to VideolLst from parrent component App as a props
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    // debounce takes inner function "videoSearch" and returns new function that can be called
    // once every 300ms
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
//Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
