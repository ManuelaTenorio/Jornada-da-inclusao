import React, { useEffect } from 'react';

const Acessibility = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://website-widgets.pages.dev/dist/sienna.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default Acessibility;
