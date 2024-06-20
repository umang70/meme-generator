import React, { useEffect ,useState }  from 'react'
import BasicExample from '../components/BasicExample';
import {getData} from '../api/memes'



const Home =()=>{
  const [data,setData] = useState([]);
 
const [val ,setVal]=  useState([])

useEffect(() => {
  getData().then((res) => {
    setData(res.data.memes);
  });
}, []);

  return (
    <div className='row'>
    { data.map(el=> <BasicExample img={el.url} title={el.name} />)} 
    </div>
  )
}

export default Home;