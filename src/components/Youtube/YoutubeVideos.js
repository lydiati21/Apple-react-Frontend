import {useState,useEffect}from 'react'

 function YoutubeVideos() {
  const[youtubeVideos,setYoutubevideos]=useState([]);
  useEffect(()=>{
    fetch(
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBEorF2xh8-t6dw_GAk1LjfZGd0YI8s2NQ'
    )
    .then((res)=> res.json())
    .then((data)=>{
// console.log(data);
      setYoutubevideos(data.items);

    })
  },[]);
  // console.log(youtubeVideos);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row  justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br/>
                <h1>Latest Videos</h1> 
                <br/>
              </div>
            </div>

 {youtubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
</section>
)
}
export default YoutubeVideos;



// apple format
// 'https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyBEorF2xh8-t6dw_GAk1LjfZGd0YI8s2NQ' 

//  apple channel id
//  "UCE_M8A5yxnLfW0KghEeajjw"

// json format
  // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBEorF2xh8-t6dw_GAk1LjfZGd0YI8s2NQ 