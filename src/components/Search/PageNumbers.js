import React from 'react';


/**
 * Takes an integer and returns page number buttons
 * @param {Integer} pages
 */

const PageNumbers = ({ pages }) => {
  const numbers = [...Array(pages+1).keys() ].map((num, idx) => {
    return (
      <li key={idx}>
        { num }
      </li>
    )
  });
  return (
    <div id="page-numbers">
      <ul>
        { numbers } 
      </ul>
    </div>
  );
};

export default PageNumbers;