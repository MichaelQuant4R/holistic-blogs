import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./pages/Profile";


function App() {
    
    const [comments, setComments] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
    
    console.log(window.location.origin);
        
    
        
    const path =  window.location.origin;
        
    fetch(`${path}/api/comments`, {
        method:"GET",
        mode:"cors",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Access-Allow-Control-Origin": "*"
        }
    })
      .then(resp => resp.json())
        
    .then(json => {
        
        console.log("JSON!");
        console.log(json);
        
        setComments(json["comments"]);
        
        console.log(json["comments"]);
        
        setLoading(false);
        
        
    })
    .catch(error => {
        
        console.log(error);
        
        
        
    });
        
    
    
    
        
    }, []);
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          FLASK APP
        </a>
      </header>
          
     
          
          {loading? (
              <h4>Loading. Please wait...</h4>
              
              
              ):(
              
      <Router>
                  
       <ul id="comments-ul">
              {comments.map((comment, i) => (
              
          <li key={i} className="comment-li">
              <div  className="comment-container">
               <Link to={`/profile/${comment.username}`}>{comment.username}
                  </Link>
                  <p>{comment.text}</p>
                  </div>
                          <hr/>
              </li>
               
            
              
          ))}
          
      </ul>
           <Switch>       
     <Route exact path="/profile/:username" component={Profile}/>
          </Switch>
      </Router>
              
              
              )}
          
          
          
    </div>
  );
}


export default App;




















