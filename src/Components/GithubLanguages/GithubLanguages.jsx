import React, { useState, useEffect } from 'react'
import './GithubLanguages.scss'

function GitHubLanguages({ repoName }) {
  const [languages, setLanguages] = useState({})

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/Adrien-Cros/${repoName}/languages`
        )
        const data = await response.json()
        setLanguages(data)
      } catch (error) {
        console.error('Error fetching languages:', error)
      }
    }

    fetchLanguages()
  }, [])

  const totalLines = Object.values(languages).reduce((acc, val) => acc + val, 0)

  return (
    <>
      {totalLines > 0 && (
        <>
          <div className="data-name"> Github Data:</div>
          <ul>
            {Object.entries(languages).map(([language, lines], index) => (
              <li key={index}>
                {language}: {((lines / totalLines) * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default GitHubLanguages
