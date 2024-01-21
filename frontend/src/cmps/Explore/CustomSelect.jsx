import React, { useState } from 'react';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
  };

  return (
    <div >
      <div>
        <button className="options-btn" onClick={handleToggle}>Budget</button>
      </div>

      {isOpen && (
        <div className="budget">
          <div>
            <label htmlFor='min'>Min.<input id='min' type="number" /></label>
            <label htmlFor='max'>Max.<input id='max' type="number" /></label>
            <label>Clear all</label>
            <button>Apply</button>

          </div>
          
          <div>
            {/* Your own controls can go here */}
            <button onClick={handleToggle}>Close Select</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;