'use client'
import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


interface ICircularProgress {

  showImage: boolean;
  autoChangeProgress: boolean;
  color: string


}

const CircularProgress = (props: ICircularProgress) => {
  const [progress, setProgress] = useState(90);


  const {showImage, autoChangeProgress, color} = props

  useEffect(() => {
    if (autoChangeProgress) {
      const interval = setInterval(() => {
        const newProgress = Math.floor(Math.random() * 100);
        setProgress(newProgress);
      }, 3000); // Change the value every 3 seconds

      return () => clearInterval(interval);
    }
  }, [autoChangeProgress]);

  return (
    <div style={{ width: 160 }}>
      <CircularProgressbarWithChildren value={progress} styles={{ path: { stroke: color } }}>
        {showImage && (
          <img style={{ width: 60, marginTop: -8 }} src="/emoji.png" alt="doge" />
        )}
        <div style={{ fontSize: 12, marginTop: -2, color: 'white' }}>
          <strong>{progress}%</strong> mate
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default CircularProgress;
