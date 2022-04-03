import React from 'react';
import './share/assets/css/layout.css';
import 'antd/dist/antd.css';
import LayOut from './share/layout/LayOut';
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { config } from './firebase/config';

const app = initializeApp(config.firebaseConfig);

export const db = getFirestore(app);

function App() {
  return (
    <div className="App">
      <LayOut></LayOut>
    </div>
  );
}

export default App;
