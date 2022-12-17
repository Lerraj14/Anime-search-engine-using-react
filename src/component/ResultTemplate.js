import React from "react";
import styled from "./ResultTemplate.module.css";
const ResultTemplate = ({ hit }) => {
  return (
    <>
      <div className={styled.animecontainer}>
        <div className={styled.animewrapper}>
         <a href={hit.link} target="_blank">
             <img className={styled.animeImage} src={hit.img_url} alt="movie" />
             <h2 className={styled.animeTitle}>{hit.title}</h2>
             <h3 className={styled.animeTitle}>Visit Source</h3>
         </a>
        </div>
        <div className={styled.animeGenre}>
          <h3>Genre:{hit.genre}</h3>
        </div>
        <p>{hit.synopsis}</p>
      </div>
    </>
  );
};

export default ResultTemplate;
