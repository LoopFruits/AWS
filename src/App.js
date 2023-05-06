import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


class App extends React.Component { 
  render() { 
    return (
      <div className="App">
       <Header/>
       <Main/>

        

          <footer className="scene">
            <article className="content">
              <div id="socialmedia">
                <ul className="group">
                  <li><a href="https://twitter.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/twitter.png" alt="icon for twitter"/></a></li>
                  <li><a href="http://www.facebook.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/facebook.png" alt="icon for facebook"/></a></li>
                  <li><a href="http://www.youtube.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/youtube.png" alt="icon for youtube"/></a></li>    
                </ul>      
              </div>
            </article>
          </footer>
        </div>
    );
  }
}

export default App;
