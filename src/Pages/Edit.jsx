import React, { useState ,createRef } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'; 
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
   const [params]= useSearchParams();
   const [count ,setCount]= useState(0)
   const memeRef=createRef()
   const addText = () => {
       setCount(count+1)
   }
  return (
    <div>
        <div style={{width:"500px" , border:'1px, solid'}} ref={memeRef} className='meme'>
        <img src={params.get('url')} alt=""  width='300px' />
      {  Array(count).fill(0).map(e => <Text/>)}
    </div>
    <Button onClick={addText}>Add Text</Button>
    <Button variant='success' onClick={(e)=>exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  )
}

export default Edit