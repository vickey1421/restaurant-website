import React from 'react';

const CardComponent = ({isrc,title,text}) => {
  return (
    <div className="card d-inline-block" style={{ width: '18rem' }}>
      <img src={isrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        <button className='btn btn-primary'>click me</button>
      </div>
    </div>
  );
};

export default CardComponent;
