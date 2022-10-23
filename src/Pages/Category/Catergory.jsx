import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Catergory = () => {
  const categoryNews = useLoaderData();

  return (
    <div>
      <h2>Category Page : {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Catergory;
