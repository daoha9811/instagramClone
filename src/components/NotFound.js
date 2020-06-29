import React from 'react';
import NotFoundImg from '../assets/images/notfound.svg';

export default () => {
    return <div className="not-found" >
        <img alt="empty" src={NotFoundImg} width="200" height="200" />
        <span>Page not found</span>
    </div>
}