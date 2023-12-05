import './App.css';
// import SearchNav from './components/SearchNav';
import React from 'react';
// import axios from 'axios';
// import VideoList from './components/VideoList';
// import VideoPlayer from './components/VideoPlayer';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const Redux = require('redux');

const rootReducer = (currentState = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentState + 1;
    default:
      return currentState + 1;
  }
};

const store = configureStore({reducer:rootReducer});
console.log(store.getState());

function App() {
  // const [search, setSearch] = React.useState("");
  // const [result, setResult] = React.useState([]);
  // const [player, setPlayer] = React.useState("");
  // const [topic, setTopic] = React.useState("");

  // const handleInputSearch = (e) => {
  //   setSearch(e.target.value);
  // }

  // const handleSearchClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const searchResult = await retrieveSearchResult(search);
  //     const [firstVideo, ...restVideos] = searchResult;
  //     const firstVideoId = firstVideo?.id.videoId;
  //     if (firstVideoId) {
  //       await retrieveMainVideo(firstVideoId);
  //       setResult(restVideos);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  // const handleVideoClick = async (e) => {
  //   e.preventDefault();
  //   await retrieveMainVideo(e.target.id);
  //   await retrieveSearchByTopicId();
  // }

  // const retrieveSearchResult = async (keyword) => {
  //   const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
  //     params: {
  //       part: 'snippet',
  //       q: keyword,
  //       type: 'video',
  //       key: 'AIzaSyBHU7_B4VESqhbmBoAaUUiUv5GKgrE-aKQ',
  //     }
  //   });

  //   const items = response.data.items;
  //   setResult(items);
  //   return items;
  // }

  // const retrieveSearchByTopicId = async (topicId) => {
  //   const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
  //     params: {
  //       part: 'snippet',
  //       topicId: topicId,
  //       type: 'video',
  //       key: 'AIzaSyBHU7_B4VESqhbmBoAaUUiUv5GKgrE-aKQ',
  //     }
  //   });

  //   const items = response.data.items;
  //   setResult(items);
  //   return items;
  // }

  // const retrieveMainVideo = async (id) => {
  //   const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
  //     params: {
  //       part: 'snippet,player,topicDetails',
  //       type: 'video',
  //       id: id,
  //       key: 'AIzaSyBHU7_B4VESqhbmBoAaUUiUv5GKgrE-aKQ',
  //     }
  //   });

  //   const embedHtml = response.data.items[0]?.player.embedHtml;
  //   setPlayer(embedHtml || "");
  //   setTopic();
  // }

  return (
    // <div className="App">
    //   <SearchNav handleInput={handleInputSearch} search={search} handleSearch={handleSearchClick} />
    //   <div style={{ width: '100%', height: '100%', display: 'flex', margin: '10px' }}>
    //     <VideoPlayer embedHtml={player} />
    //     <VideoList data={result} handleClick={handleVideoClick} />
    //   </div> 
    //   <Car/>
    <Provider store={store}>
      <button onClick={()=>{store.dispatch({type:'INCREMENT'})}}>{store.getState()}</button>
    </Provider>
    // </div>
  );
}

export default App;
