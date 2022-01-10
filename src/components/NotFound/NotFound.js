import React from 'react';
import Header from '../Header/Header';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
           <Header/>
            <hr />
            <div className='container'>
                <div className="row">
                    <div className="col-md-1 col-sm-12"></div>
                    <div className="col-md-10 col-sm-12">
                        <h5 className='mx-4'>Search result not found</h5>
                        <div class="gcse-searchbox-only">

        </div>
                    </div>
                    <div className="col-md-1"></div>
                    
                </div> 
            </div>
        </div>
        
    );
};

export default NotFound;