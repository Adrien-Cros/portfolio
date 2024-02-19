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
  }, [repoName])

  const totalLines = Object.values(languages).reduce((acc, val) => acc + val, 0)

  function percentHelpers(lines, totalLines) {
    return ((lines / totalLines) * 100).toFixed(2)
  }

  return (
    <>
      {totalLines > 0 && (
        <>
          <div className="data-name"> Github Data via Github API:</div>
          <ul className="language-list">
            {Object.entries(languages).map(([language, lines], index) => (
              <li key={index}>
                {language}: {percentHelpers(lines, totalLines)}% :
                <div className="lang-bar-container">
                  <div
                    className="lang-bar"
                    style={{
                      width: `${percentHelpers(lines, totalLines)}%`,
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default GitHubLanguages
