import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import './Header.css'


const Header = (props) => {
    const [searchValue, setSearchValue] = useState(props.value);
    
    const history = useHistory();
    const handleClick = (e)=> {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            console.log("Enter key was pressed. Run your function.");
            e.preventDefault();
            if(searchValue){
            setSearchValue(searchValue);
            history.push(`/searchList/q=${searchValue}`)
            }
          }
      
      }
    return (
      
        <div className='container-fluid pt-4 pb-2 bg-white sticky-top'>
            <div className='row'>
                <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                    
                    <Link to='/' className='text-decoration-none responsive'>
                        <h1 className='mx-5'>
                            <span style={{color:'#4285F4'}}>V</span><span style={{color:'#EA4335'}}>I</span><span style={{color:'#FBBC05'}}>E</span><span style={{color:'#34A853'}}>W</span>
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                    <div className="input-box responsive">
                        <input value={searchValue} type="text" className="search-input" placeholder='Type to Search...' onChange={e => setSearchValue(e.target.value)} /><span className='search-btn' onClick={handleClick}><FaSearch/></span>
                    </div>
                </div>
            </div>
        </div>
    
    
       
    );
};

export default Header;