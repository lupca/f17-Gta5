import {Grid, TablePagination} from "@mui/material";
import {VideoYoutube} from "components";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./ListVideoContent.scss";

const ListVideoContent = ({videoIds}) => {
  const [selectedVideo, setSelectedVideo] = useState(videoIds[0]);
  const [listCurrentVideo, setListCurrentVideo] = useState([]);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    setSelectedVideo(videoIds[0]);
    setListCurrentVideo(videoIds.slice(0, 4));
  }, [videoIds]);

  return (
    <div className="videos">
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2}>
          <div className="list-video-thumbnail">
            {listCurrentVideo.map((videoId) => (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={videoId}
                key={videoId}
                onClick={() => setSelectedVideo(videoId)}
              />
            ))}
            <TablePagination
              component="div"
              count={10}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={4}
              rowsPerPageOptions={[]}
              labelRowsPerPage=""
            />
          </div>
        </Grid>
        <Grid item xs={10} sm={10}>
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
