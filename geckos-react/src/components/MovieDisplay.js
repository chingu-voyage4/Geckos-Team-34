import _ from 'lodash';
import React, {Component} from 'react';
import Moviesdb from './Moviesdb';



class MovieDisplay extends Component{
renderMovieInfo(){
  return _.map(Moviesdb, ({ Title, Year,Poster,Rated,Plot, Director,Writers,Actors }) => {
    return (
      <div className="ui main text segment container inverted">
      
  <img className="ui small left floated circular  image" src={Poster} alt="Poster"></img>
  <h1 className="ui huge header">{Title}</h1>
  <p>Year: {Year}</p>
  <p>{Plot}</p>
  
  <p>Director: {Director}</p>
  
  <p>Writers: {Writers}</p>
  <p>Actors: {Actors}</p>
  

  
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