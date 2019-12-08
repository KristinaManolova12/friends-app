import React from 'react';

function Main({ children, title }) {
  return (
    <div className="Main">
      <h1>{title}</h1>
      
      {children}
    </div>
    
  );
}

export default Main;
