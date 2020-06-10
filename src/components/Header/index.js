import React, { Fragment } from "react";


// function Header ({titulo}){
//     console.log(titulo)

//     return(
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>

//     )
// }

const Header = ({ titulo }) => (
  <Fragment>
    <h1>{titulo}</h1>
    <div className="svgImage"></div>
  </Fragment>
);

export default Header;
