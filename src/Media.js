import React from "react";

export const Media = (props) => {
  const { data } = props;

  console.log('props: ', props);

  console.log('data: ', data);
  console.log('data.media_type: ', data.media_type);

  // if (!document.readyState) return <h3>Loading...</h3>;

  if (data.media_type === "image") {
    document.body.style.background = `url('${data.hdurl}') no-repeat center center fixed`;
    document.body.style.backgroundColor = 'black';
    document.body.style.backgroundSize = 'cover';
  }

  return (
    /* jshint ignore:start */
    <React.Fragment>
      {
        data.media_type === "video" ?
          <React.Fragment>
            <div className="backgroundMedia">
              <iframe title="background" frameBorder="0" height="100%" width="100%"
                src={data.url + "&autoplay=1&controls=0&showinfo=0&autohide=1&wmode=transparent&hd=1"}>
              </iframe>
            </div>
            :
          <div />
          </React.Fragment>
          :
          <div />
      }
    </React.Fragment>
    /* jshint ignore:end */
  );
};
