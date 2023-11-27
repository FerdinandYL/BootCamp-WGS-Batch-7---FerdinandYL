export default function VideoList({data, handleClick}){
  let videos;

  if(data.length < 1){
    videos = <></>;
  } else {
    videos = data.map(video => {
        return (
          <div className='ui card'>
            <div className='image' onClick={handleClick}>
              <img className="image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} id={video.id.videoId} draggable="false"/>
            </div>
            <div className="description">
              {video.snippet.title}
            </div>
          </div>
        )
    })
  }

  return(
      <div className='ui link cards' style={{display:'block', margin:'-10px 0px 0px 0px'}}>
          {videos}
      </div>
  );
}