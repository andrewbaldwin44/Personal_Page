import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

function fetchData(url, callBack) {
  fetch(url)
    .then(response => response.json())
    .then((data) => callBack(data))
    .catch(error => console.log(error))
}

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);

  const parseProjectData = ({ projects }) => {
    setProjects(projects);
  }

  useEffect(() => fetchData('/projects', parseProjectData), []);

  return (
    <DataContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
