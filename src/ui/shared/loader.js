import React from 'react';
import Lottie from 'react-lottie';

import * as animationData from './loader.lottie.json';

function Loader({ width }) {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={width} width={width} />
    </>
  );
}

Loader.defaultProps = {
  width: 100,
};

export default Loader;
