import React from "react";

export const Media = (props) => {
  const { data } = props;

  console.log('props: ', props);

  console.log('data: ', data);
  console.log('data.media_type: ', data.media_type);

  // if (!document.readyState) return <h1 className="centerBoth">Loading...</h1>;

  if (data.media_type === "video") {
    if (!data.url.endsWith('?rel=0') && data.url.indexOf('?') === -1) {
      data.url = data.url+'?rel=0';
    }
    function extractVideoID() {
      const b = data.url.lastIndexOf('/')+1;
      const e = data.url.indexOf('?')
      const s = e>b ? data.url.substring(b,e) : data.url.substring(b);
      // console.log('data.url: ', data.url);
      // console.log('b: ', b);
      // console.log('e: ', e);
      // console.log('s: ', s);
      return s;
    }
  
    function fetch_highest_res (videoid) {
      // let resolutions = ['maxresdefault', 'hqdefault', 'mqdefault'];
      // for (let i = 0; i < resolutions.length; i++) {
      //   let imgUrl = `https://i.ytimg.com/vi/${videoid}/${resolutions[i]}.jpg`;
      //   //download imgUrl magic
      //   const imgUrlDownloaded = 'magic';
      //   const w = imgUrlDownloaded.naturalWidth;
      //   const h = imgUrlDownloaded.naturalHeight;
  
      //   if (w > 0 && h > 0) {
      //     data.hdurl = imgUrl;
      //     break;
      //   }
      // }
    }
    // data.hdurl = fetch_highest_res(extractVideoID());

    const videoid = extractVideoID();
    // const res = 'maxresdefault';
    const res = 'hqdefault';
    data.hdurl = `https://i.ytimg.com/vi/${videoid}/${res}.jpg`;
  }
  
  document.body.style.backgroundColor = 'black';
  document.body.style.background = `url('${data.hdurl}') no-repeat center center fixed`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.transition = 'all .5s cubic-bezier(0.6, -0.28, 0.735, 0.045)';
  //Next 2 lines are to make it work on Android
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';

  return (
    /* jshint ignore:start */
    <React.Fragment>
      {
        data.media_type === "video" ?
          <React.Fragment>
            <div className="backgroundMedia z-99">
              <iframe title="background" frameBorder="0" height="100%" width="100%"
                src={data.url + "&autoplay=1&hd=1&controls=0&autohide=1"}>
              </iframe>
            </div>
          <div />
          </React.Fragment>
          :
          <div />
      }
    </React.Fragment>
    /* jshint ignore:end */
  );
};
