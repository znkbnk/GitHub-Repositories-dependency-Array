import React, { useState, useEffect } from 'react';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    try {
      const response = await fetch('https://api.github.com/users/{username}/repos');
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
            <p>Stars: {repository.stargazers_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
