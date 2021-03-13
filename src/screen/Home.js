import React from 'react';
import { Link } from 'react-router-dom';


function Home  ()  {
  return (
    <div className="home">
      <div className="home-box">

        <p>
            Buy and sell graphic images, vector art, illustrations and more for your online business. 
            <br/>
            Only at <strong>Graphica&#8482;</strong>
        </p>
            <div className="button-layout">
              <Link to="/login" className="link btn btn-submit">
                LOGIN
              </Link>
              <Link to="/signup" className="link btn btn-submit">
                SIGNUP
              </Link>
            </div>

      </div>
    </div>
  );
}


export default Home;