// src/components/Aggregator.tsx
import React, { useState } from 'react';

const Aggregator: React.FC = () => {
  const [tx, setTx] = useState<string>(''); 
  const [response, setResponse] = useState<string>('Default aggregator response text');

  const handleTxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTx(e.target.value);
  };

  const handleGetRequest = async () => {
    if (!tx) {
      alert('Please enter a transaction ID');
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:8098/v1/aggregator/read/${tx}`, {
        method: 'GET',
      });

      if (res.ok) {
        const result = await res.json();
        setResponse(JSON.stringify(result, null, 2));
        alert('Data retrieved successfully!');
      } else {
        setResponse('Failed to retrieve data');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while retrieving data');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Aggregator</h2>

      {/* tx 输入框 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={tx}
          onChange={handleTxChange}
          placeholder="Enter tx"
          style={{ width: '100%', padding: '10px' }}
        />
        <button onClick={handleGetRequest} style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>
          Get Data
        </button>
      </div>

      {/* 显示服务器响应 */}
      <h3>Response Text</h3>
      <textarea
        value={response}
        readOnly
        rows={10}
        style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: '#f9f9f9' }}
      />
    </div>
  );
};

export default Aggregator;