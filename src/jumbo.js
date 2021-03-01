import './header.css';
import React from 'react';


class Jumbo extends React.Component {
render() {
    return (
           <div className="container d-flex h-100 align-items-center">
               <div className="mx-auto text-center" >
                   <h1 className="mx-auto my-0 text-uppercase">
                    Welcome To JJ Media Co.
                   </h1>
                   <h2 className="text-white-50 mx-auto mt-2 mb-5">
                    Everyone has a story, and we wish to capture it!
                   </h2>
                   <a className="btn btn-success js-scroll-trigger" href="#about">Get Started</a>
               </div>
           </div>
    );
  }
}

export default Jumbo;
