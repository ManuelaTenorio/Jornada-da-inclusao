import React from 'react'
import "./resultado.css"

function Resultado() {
  return (
    <div className='bodyPer'>
      <div className="profile-container">
        <h1 className='h1Per'></h1>
        <div className="profile-info">
          <div className="user-info">
          <table className='tbRe'>
        <thead>
          <tr className='table'>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tempo</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Acerto</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tentativas</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tempo entre acertos</th>
            <th style={{ padding: '8px', border: '1px solid #ddd' }}>Pontuação</th>
          </tr>
        </thead>
        <tbody>
        <tr className='table'>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>00:45</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>8</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>10</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>5 segundos</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>80</td>
          </tr>
          <tr className='table'>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>01:15</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>12</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>15</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>4 segundos</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>85</td>
          </tr>
          <tr className='table'>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>00:30</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>5</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>7</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>6 segundos</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>70</td>
          </tr>
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resultado