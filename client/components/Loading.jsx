import React, { useEffect, useState } from 'react';

const Loading = ({ isHeader = false }) => {
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (loadingDots.length >= 3) {
        setLoadingDots('');
      } else {
        setLoadingDots((prev) => prev + '.');
      }
    }, 300);
  }, [loadingDots]);

  return (
    <div>
      <img
        className={`loading ${isHeader && 'header-logo'}`}
        src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/cs_scratch/loading.gif"
        alt="loading"
      />
      {!isHeader && <p style={{ textAlign: 'center' }}>Loading{loadingDots}</p>}
    </div>
  );
};

export default Loading;
