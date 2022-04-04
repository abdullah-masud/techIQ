import React from 'react';
import notfound from '../../images/notfound.svg'

const NotFound = () => {
    return (
        <div className='my-5'>
            <img width="400px" src={notfound} alt="" />
            <h3 className='mt-4' style={{ color: "#2b2765" }}>giNot Found</h3>
        </div>
    );
};

export default NotFound;