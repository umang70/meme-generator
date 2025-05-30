import React, { useState ,createRef } from 'react'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'; 
import { exportComponentAsJPEG } from 'react-component-export-image';
import './Edit.css'

const Edit = () => {
   const [params]= useSearchParams();
   const [count ,setCount]= useState(0)
   const memeRef=createRef()
   const addText = () => {
       setCount(count+1)
   }

   const handleInstagramShare = () => {
     alert('First, click "Save" to download your meme. Then, open Instagram and upload the image from your device.');
     window.open('https://www.instagram.com/', '_blank');
   }

  return (
    <div>
        <div ref={memeRef} className='meme'>
            <img src={params.get('url')} alt="" width='300px' />
            {Array(count).fill(0).map((e, i) => <Text key={i} initialEditMode={i === count - 1} />)}
        </div>
        <div className="edit-btns">
            <Button onClick={addText}>Add Text</Button>
            <Button variant='success' onClick={() => exportComponentAsJPEG(memeRef)}>Save</Button>
            <Button variant='info' onClick={handleInstagramShare}>Share on Instagram</Button>
        </div>
    </div>
  )
}

export default Edit