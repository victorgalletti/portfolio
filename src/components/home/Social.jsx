import React from 'react';
import { Gmail, LRounded, GitHub } from '../icons/Icons';

const Social = () => {
  return (
    <div className="home__social">
        <a href="" className="home__social-icon" target="_blank">
            <LRounded/>
        </a>

        <a href="" className="home__social-icon" target="_blank">
            <Gmail/>
        </a>

        <a href="" className="home__social-icon" target="_blank">
            <GitHub/>
        </a>
    </div>
  );
};

export default Social;