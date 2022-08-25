import { Grid } from "@mui/material";
import { VideoYoutube } from "components";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ListVideoContent.scss";

const ListVideoContent = ({ videoIds }) => {
  const [selectedVideo, setSelectedVideo] = useState(videoIds[0]);
  const [listCurrentVideo, setListCurrentVideo] = useState([]);
  useEffect(() => {
    setSelectedVideo(videoIds[0]);
    setListCurrentVideo(videoIds.slice(0, 4));
  }, [videoIds]);

  return (
    <div className="videos">
      <Grid container spacing={2}>
        <Grid item sm={2}>
          <div className="list-video-thumbnail">
            {listCurrentVideo.map((videoId) => (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={videoId}
                key={videoId}
                onClick={() => setSelectedVideo(videoId)}
              />
            ))}
          </div>
        </Grid>
        <Grid item sm={10}>
          <VideoYoutube videoId={selectedVideo} />
        </Grid>
      </Grid>
    </div>
  );
};
ListVideoContent.propTypes = {
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ListVideoContent;