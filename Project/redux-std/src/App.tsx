import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './redux/recipe';

function App() {
  const recipe=useSelector((state:any)=>state.recipe)
  const dispatch=useDispatch();
  const [food,setFood]=useState('')

  useEffect(()=>{
    if(recipe.recipes){
      console.log(recipe.recipes[0]?.strMeal)
      setFood(recipe.recipes[0]?.strMeal)
    }
  },[recipe])

  const go=()=>{
    dispatch(fetchRecipes({recipes:'Arrabiata'}))
  }
  return (
    <div className="App">
      hi
      {food}
      <button onClick={go} type="button">asdf</button>
    </div>
  );
}

export default App;
