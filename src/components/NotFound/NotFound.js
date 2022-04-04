import React from 'react';
import notfound from '../../images/notfound.svg'

const NotFound = () => {
    return (
        <div className='my-5'>
            <img className='mx-auto' width="400px" src={notfound} alt="" />
            <h3 className='mt-5' style={{ color: "#2b2765" }}>Not Found</h3>
        </div>
    );
};

export default NotFound;