import React, { createContext, useEffect, useState } from 'react';

import { countPages } from '../utils/index';

export const DataContext = createContext(null);

function fetchData(url, callBack) {
  fetch(url)
    .then(response => response.json())
    .then((data) => callBack(data));
}

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonals] = useState([]);
  const [limit, setLimit] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const parseProjectData = ({ projects }) => {
    setProjects(projects);
  }

  const updatePageCount = (testimonialsAmount) => {
    const newPagesCount = countPages(testimonialsAmount, limit);

    setPagesCount(newPagesCount);
  }

  const parseTestimonialData = ({ testimonials, testimonialsAmount }) => {
    setTestimonals(testimonials);
    updatePageCount(testimonialsAmount);
  }

  const getTestimonials = (page, limit) => {
    if (limit > 0) {
      fetchData(`/testimonials?page=${page}&limit=${limit}`, parseTestimonialData);
    }
  }

  useEffect(() => fetchData('/projects', parseProjectData), []);

  return (
    <DataContext.Provider
      value={{
        projects,
        testimonials,
        limit,
        setLimit,
        pagesCount,
        getTestimonials,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
