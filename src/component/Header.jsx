import React, { Component } from 'react'

 class Header extends Component {
   constructor(props) {
     super(props);
    this.state={

     };
   }

   render() {
     return (
       <div>
         <header>
           <nav className="navbar navbar-expand-nd navbar-dark bg-dark">
             <div>
               <a href="https://www.youtube.com/" className="navbar-brand">
                 Employee management app
               </a>
             </div>
           </nav>
         </header>
       </div>
     );
   }
 }
export default Header;