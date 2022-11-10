import React from 'react';

const FoodItems = ({data}) => {
  return (
    <div className='d-flex flex-wrap justify-content-around'>
     {
        data.map((data,index)=>
        
        <div key={index} className='card ' style={{width:250,margin:30}}>
            <img src={data.recipe.image}></img>
          
           <div class="card-body">
             <center>
                <h5 className='card-title'>{data.recipe.label}</h5>
                <h5>Rs {(Math.round(data.recipe.calories/10))}</h5>
                <button className='btn btn-primary buy'>Buy</button>
             </center>
            </div>
        </div>
        
        )
     }
    </div>
  );
}

export default FoodItems;
