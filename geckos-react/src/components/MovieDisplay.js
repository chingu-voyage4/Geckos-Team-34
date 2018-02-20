import _ from 'lodash';
import React, {Component} from 'react';
import Moviesdb from './Moviesdb';



class MovieDisplay extends Component{
renderMovieInfo(){
  return _.map(Moviesdb, ({ Title, Year,Poster,Rated,Plot }) => {
    return (
      <div key={Title} className="container">
      <h1>{Title}</h1>
      <img alt="Poster" src={Poster}></img>
      <h4>{Plot}</h4>
      <p>{Year}</p>
      <p>{Rated}</p>
        

      </div>
    );
  });
}





render(){
  
  return(
   
    <div>{this.renderMovieInfo()}</div>
  )
}

}



export default MovieDisplay;