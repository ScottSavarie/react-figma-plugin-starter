import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './defaults.css';

const App = () => {
  // Set up state to store values sent from the plugin
  const [mountMessage, setMountMessage] = useState('');
  const [selectedLayerCount, setSelectedLayerCount] = useState(0);

  // On the first render, post message to tell the plugin (code.ts) that the App is mounted
  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: 'onMount' } }, '*');
  }, []);

  // When the plugin code posts messages, capture them here and set state
  onmessage = (event) => {
    const { message, value } = event.data.pluginMessage;

    switch (message) {
      case 'setMountMessage':
        setMountMessage(value);
        console.log('hey there', value);
        break;
      case 'setSelectedLayerCount':
        setSelectedLayerCount(value);
        break;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>{mountMessage}</h1>
      <p>{`Selected layers: ${selectedLayerCount}`}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('react-page'));
