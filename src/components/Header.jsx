import React, {useEffect, useState} from 'react'
import Search from './Search';
import "./Header.css"
import { BsSearch} from 'react-icons/bs';
import { categories } from '../utils/Constant';
import { Link, NavLink } from 'react-router-dom';

const Header = ({setData}) => {
    const [val, setval] =useState('Trending')
    // const [searchText, setSearchText] =useState('')
    const onHandleChange=(event)=>{
        setval(event.target.value)
    }
    const getText=async()=>{
       let response= await Search(val)
       setData(response)
       setval('')
    }

    const HandleSearchText=async(currsearch)=>{
        let response= await Search(currsearch);
        // console.log(response)
        setData(response)
    }
   useEffect(()=>{
    getText()
   },[])
  return (
    <div>
    <div className='Search_container'>
      <div style={{borderRadius:"50%", overflow:"hidden"}}><img src="https://tse3.mm.bing.net/th?id=OIP.JUw_xck_CvLawtOtBeHTbQHaHa&pid=Api&P=0" alt="logo" width="50px"/></div>
      <div className='input_div'>
        <input type="Search" placeholder='Search' value={val} onChange={onHandleChange}/>
        <Link to="/" onClick={getText}><BsSearch color='white'/></Link>
      </div>
    </div>
    <div className='Navbar' >
        {categories.map((curr,index)=>(
        <NavLink to='/' className='Categories' onClick={()=>HandleSearchText(curr)} key={index}>{curr}</NavLink>
      ))}
    </div>
    </div>
  )
}

export default Header
