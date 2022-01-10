import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const [searchValue, setSearchValue] = useState('');
   

    const handleClick = (e)=> {
      if(searchValue){
        e.preventDefault();   
        setSearchValue(searchValue);
        history.push(`/searchList/q=${searchValue}`);
      }
    }

      const handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
          if(searchValue){
            setSearchValue(searchValue);
            history.push(`/searchList/q=${searchValue}`);
          }
        } 
      }

    return (
        <div className="App">
      <header className="App-header">
        <h1>
          <span style={{color:'#4285F4'}}>V</span><span style={{color:'#EA4335'}}>I</span><span style={{color:'#FBBC05'}}>E</span><span style={{color:'#34A853'}}>W</span>
        </h1>
        
        <div className="mb-3">
              <input type="text" className="input-field responsive" placeholder='Type to Search...' onKeyPress={handleKeyPress} onChange={e => setSearchValue(e.target.value) } />
            </div>
            <button type="submit" className="btn btn-light btn-outline-secondary" onClick={handleClick} > <FaSearch/> View Search</button>
            
        </header>
    </div>
    );
};

export default Home;