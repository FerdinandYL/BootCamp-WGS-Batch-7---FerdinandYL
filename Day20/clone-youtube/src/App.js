// CSS
import './App.css';

// import paket third-party
import React from "react";
import axios from 'axios';

// import component
import SearchBar from './components/SearchBar';
import DaftarVideo from './components/DaftarVideo';
import VideoPlayer from './components/VideoPlayer';

function App() {
  // ===== State =====
  // search : state yang mencatat query pada searchBar.
  const [search, setSearch] = React.useState("");
  // listVideo : state yang menyimpan daftar video yang diperoleh dari API.
  const [listVideo, setListVideo] = React.useState([]);
  // player : state menyimpan hasil search videoplayer iFrame dari API.
  const [player, setPlayer] = React.useState(null);
  // page : mencatat token next page biar bisa search page selanjutnya.
  const [page, setPage] = React.useState('');

  // ===== Function Handle =====
  async function handleSearchClick(search){
    // Untuk melakukan pencarian video.
    // Mengembalikan response array[] items berisi informasi video dan men-setState listVideo dengan hasil response.
    // Digunakan saat search icon di-klik / input search di enter.
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: search,
        type: 'video',
        key: 'AIzaSyBHU7_B4VESqhbmBoAaUUiUv5GKgrE-aKQ',
        pageToken: page,
      }
    });
    let items = response.data.items;
    getVideoPlayer(items[0].id.videoId);
    setPage(response.data.nextPageToken);
    items = items.filter((item) => {
      return item.id.videoId !== items[0].id.videoId;
    });
    setListVideo(items);
  }
  async function getVideoPlayer(id){
    // Mengambil iFrame sesuai video dengan id tertentu.
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,player,topicDetails',
        type: 'video',
        id: id,
        key: 'AIzaSyBHU7_B4VESqhbmBoAaUUiUv5GKgrE-aKQ',
      }
    });
    const embedHtml = response.data.items[0]?.player.embedHtml;
    setPlayer(embedHtml || "");
  }
  function handleOnClickVideo(e){
    getVideoPlayer(e.target.id);
  }
  function handleInputSearch(e){
    //Mencatat perubahan input search dan menyimpannya pada state search.
    setSearch(e.target.value);
  }

  React.useEffect(()=>{
    handleSearchClick('');
  },[])

  return (
    <div className="App">
      <SearchBar handleOnClickSearch={()=>handleSearchClick(search)} handleOnChange={handleInputSearch} searchState={search}/>
      <VideoPlayer embedHtml={player}/> 
      <DaftarVideo data={listVideo} handleClick={handleOnClickVideo}/>
    </div>
  );
}

export default App;