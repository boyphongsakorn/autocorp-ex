import React, { useEffect, useState } from 'react';

const HC = () => {
  const [countryItems, initCountry] = useState([])
  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:4000/history')
    return response.json()
  }
  useEffect(() => {
    fetchData().then(data => {
      initCountry(data)
    }
    )
  }, [])
  return (
    <div>
      <a href='/'><h3>back</h3></a>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Prime</th>
            <th>Prime Count</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {countryItems.map((item) =>
            <tr>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{JSON.stringify(item.prime)}</td>
              <td>{item.primecount}</td>
              <td>{item.Timestamp}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HC;