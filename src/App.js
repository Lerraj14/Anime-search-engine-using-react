import React, { useState } from "react";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  SortBy,
  Panel,
  RefinementList,
} from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite.css";
import ResultTemplate from "./component/ResultTemplate.js";
import "./App.css";

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "animesearch",
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: "title,synopsis,genre",
    queryByWeights: "4,2,1",
    numTypos: 3,
    typoTokensThreshold: 1,
  },
});

const App = () => {
  return (
    <>
      <div className="header-container">
      <h1 className="super-title">
        👊🏻👨🏻‍🦲Anime Search application built using react 👺🔪👿
      </h1>
      </div>
 
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={12} />
        <div className="search-container">
          <aside className="result-section">
            <Panel header='Popularity'>
              <SortBy
              items={[
                {label:"Default",value:"animes"},
                {
                  label:"ranked (asc)",
                  value:"animes/sort/popularity:asc",
                },
                {
                  label:"ranked (desc)",
                  value:"animes/sort/popularity:desc",
                },
              ]}
                defaultRefinement="animes"
              />
                
            </Panel>
            <Panel header="Genre">
              <RefinementList
              attribute='genre'
              transformItems={(items)=>
              items.map((item)=>({
                ...item,
                label:item.label.slice(2,-2),
              }))
              }
              searchable={true}
              showMore={true}
              limit={10}
              showMoreText="Show more"
              showLessText="Show Less"
              />
            </Panel>
            <Panel header='Aired'>
              <RefinementList attribute="aired"/>
            </Panel>
          </aside>
          <main>
            <SearchBox />
            <div className="searchbox-gap">
            <Hits className="anime-container"hitComponent={ResultTemplate} />
            </div>
            <Pagination/>
            </main>
        </div>
      </InstantSearch>
    </>
  );
};

export default App;
