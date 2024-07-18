import React from "react";

import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("something goes wrong");
  const API_URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
};

export default MovieVideos;
