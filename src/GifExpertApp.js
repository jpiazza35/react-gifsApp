import React, { useState } from 'react';
import './index.css';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () =>{
const [categories, setCategories] = useState(['dragon Ball'])
 //const categories = ['ONE Punch', 'dragon Ball', 'Samurai X']
  /* const handleAdd = ()=>{
      setCategories([...categories, 'Superman'])
  } */
    return(
    <div>
        <h2 className="animate__heartBeat">GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
      
        <ol>
           {/*  {categories.map(category =>{
                return <li key={ category }>{category}</li>
            })} */
            categories.map(category =>(
                <GifGrid 
                   key={ category }
                   category= { category }
                />
            ))
            }
        </ol>
    </div>
           )
};