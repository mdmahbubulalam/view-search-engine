import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SearchList.css'
import Header from '../Header/Header';
import key from '../../key';

const SearchList = () => {
    const val = useParams();
    const value = val.searchValue;
    const [search, setSearch] = useState({
        data:[],
        results: ''
    });
    const getSearchRequest = async (value) => {
        const url = `https://www.googleapis.com/customsearch/v1?key=${key.key}&cx=${key.cx}&q=${value}`;
        const res = await fetch(url);
        const resJson = await res.json();
        setSearch({
            ...search,
            data: resJson.items || [],
            results: resJson.searchInformation || ''
        })
    }

    useEffect(() => {
        getSearchRequest(value)
    },[value])

    

    return (
        <div>
            <Header value={value}/>
            <hr/>
            <div className='container'>
               
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        {
                            search.data.length!==0 &&
                            <p className='mx-4'>About {search.results?.totalResults} results ({search.results?.searchTime} seconds) </p>
                            // :
                            // <h5 className='mx-4'>Please try after sometimes or Click <a href="/googleCustomSearch">
                            // here</a></h5>
                        }
                        <div className='mx-4'>
                        
                            {
                                search.data.length>0 ?
                                search.data.map((data)=>
                                    <div>
                                        {/* <a href={data.pagemap.cse_image[0].src} target='_blank'>
                                                <img src={data.pagemap.cse_thumbnail[0].src} alt="" />
                                            </a> */}
                                        <div>
                                            <a href={data.displayLink} target='_blank' className='text-decoration-none text-dark'>
                                                <span>{data.displayLink}</span>
                                            </a>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <h4>{data.title}</h4>
                                            </a>
                                            <p>
                                                {data.snippet}   
                                            </p>
                                        </div>
                                    </div>  
                                )
                                :  
                                <h5 className='mx-4'>Please try after sometimes or Click <a href="/googleCustomSearch">
                            here</a></h5>
                            }
                           
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    
                </div> 
            </div>
        </div>
    );
};

export default SearchList;