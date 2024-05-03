import React from 'react'
import {useState,useEffect} from 'react';
import Rescards from './Rescards'
import Shimmer from './Shimmer';

function Body(props) {
  const {resData} = props;

  const [resList,setReslist] = useState([]);
  const [filteredRes,setFiltered] = useState([]);
  const [searchText,setText] = useState();
  
  
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setReslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltered(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(resList.length===0){
    return <Shimmer />
  }
    
  return resList.length===0 ? <Shimmer /> :
  (
    <div className="body">
    <div className="filter">
    <div className='search'>

    <input 
    type='text'
    className='search-box' 
    value={searchText} 
    onChange={(e)=>{
      setText(e.target.value);
    }}/>

    <button 
    className='search-btn'
    onClick={()=>{
      const filteredRes = resList.filter(
        (res)=>res.info.name.includes(searchText)
      );

      setFiltered(filteredRes);
    }}
    >
    Search
    </button>
   
    </div>

    <button 
    className='filter-btn' 
    onClick={()=>{
      const filteredlist = resList.filter((res)=>res.info.avgRating>4);
      setReslist(filteredlist);
    }}
     >
    Filter top Rated
    </button>

    </div>

    <div 
    className="res-container">
    {filteredRes.map((restaurant) => (
      <Rescards key={restaurant.info.id} 
      resData={restaurant}
      />
    ))}
    </div> 

    </div>
  )
}

export default Body
