import React,{useState} from 'react';
import './App.css';
import FoodItems from './FoodItems';

const App = () => {
  const [search, setSearch] = useState(''); 
  const [data, setData] = useState([]);
  const YOUR_APP_ID = '5a616b1b';
  const YOUR_APP_KEY = '663141ebf22b0b7ecef9566172393833';
  const handleSearch = (e)=>{
    setSearch(e.target.value);
    
  }
  const handleSubmit = ()=>{
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
      res=>res.json()
    ).then(data=>setData(data.hits))
    setSearch('')
  }

  return (
    <div>
     <div className='search_container '>
          <h1 className='title'>Food World</h1>
          <input className='input form-control w-25' value={search} onChange={handleSearch}></input>
          <br />
          <button className='btn btn-primary' onClick={handleSubmit}>Search</button>
     </div>
     <div>
      {
        data.length>=1 ? <FoodItems data={data} /> : null
      }
     </div>
    </div>
  );
}

export default App;
