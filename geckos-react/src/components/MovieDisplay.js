import _ from 'lodash';
import React, {Component} from 'react';
import Moviesdb from './Moviesdb';



class MovieDisplay extends Component{
renderMovieInfo(){
  return _.map(Moviesdb, ({ Title, Year,Poster,Rated,Plot, Director,Writers }) => {
    return (
      <div class="ui segment container">
  <img class="ui small left floated circular  image" src={Poster}></img>
  <h1>{Title}</h1>
  <p>{Plot}</p>
  <p>Year: {Year}</p>
  <p>Director: {Director}</p>
  {/* how to render the writers one by one */}
  <p>Writers: {Writers}</p>
  

  
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