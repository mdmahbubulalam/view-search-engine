import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import key from '../../key';
import './GoogleCustomSearch.css'

const GoogleCustomSearch = () => {
    return (
       
         <div className='App bg-white'>
             <header className='App-header'>
                <Link to='/' className='text-decoration-none'>
                    <h1>
                        <span style={{color:'#4285F4'}}>V</span><span style={{color:'#EA4335'}}>I</span><span style={{color:'#FBBC05'}}>E</span><span style={{color:'#34A853'}}>W</span>
                    </h1>
                </Link>
                <form method = "get" title = "Search Form" action="https://cse.google.com/">
                    <div className="input-box">
                        <input type="text" id="q" className="search-input" name="q" placeholder='Type to Search...' alt="Search Text" maxlength="256" />
                        <input type="hidden" id="cx" name="cx" value={key.cx} />
                        <button type="submit" id="searchSubmit" name="submit" className='search-button' ><FaSearch/></button>
                    </div>
                </form>             
             </header>
        </div>
    );
};

export default GoogleCustomSearch;