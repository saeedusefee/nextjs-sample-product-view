import React from 'react';

const ContentImage = ({ alt, ...restProps }) => {
  const altValue = alt ? alt : '';
  return <img alt={altValue} {...restProps} />;
};

export default ContentImage;
