import React, { useEffect, useState } from 'react';
import Error from '../components/Error'
import Loader from '../components/Loader'
import useRequestData from '../hooks/useRequestData'

const Slider = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const dotClassName = 'dot';

  useEffect(() => {
    makeRequest('http://localhost:5023/reviews');
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {error && <error />}
      {isLoading && <Loader />}
      <>
        {data && data.length > 0 && (
          <div className="review">
            <div className="reviewoverlay"></div>
            <div className="revieimg">
              <img src="/images/udtalelser-bg.jpg" alt="" />
            </div>
            <div className="reviewContent">
              <h2>Kundeudtalelser</h2>
              <div className="line"></div>
              <p>"{data[currentIndex].content}"</p>
              <h3>{data[currentIndex].author}</h3>
              <div className="dots">
                {data &&
                  data.length > 0 &&
                  data.map((_, index) => (
                    <span
                      key={index}
                      className={`${dotClassName} ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Slider;
