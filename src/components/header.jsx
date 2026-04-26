import { Link } from 'react-router-dom';

function Header(){
    return (
    <>  
     <div id="top-bar">
         <div className="container">
             <div className="col">
                  <ul id="top-buttons">
                     <li><a href="/"><i className="sign"></i>Login</a> </li>
                     <li><a href="/"><i className="square"></i>Register</a></li>
                      <li className="divider"></li>
                      <li>
                        <div className="switcher">
                          <span><i className="globe"></i> English</span>                          
                        </div>
                      </li>                                              
                 </ul>
              </div>
          </div>
        </div>
     <div className="A">
        <h1>
            <img src={logo} alt="Logo" />
        </h1>
        
        <nav className="Navbar">
          <ul className="Nli">
                <Link className="lk" to="/">Find a Rental</Link>
                <Link className="lk" to="/list-rental">List your rental</Link>
                <Link className="lk" to="/travel-guides">Travel Guides</Link>
                <Link className="lk" to="/regions">Regions</Link>
                <Link className="lk" to="/news">News</Link>
                <Link className="lk" to="/contact">Contact</Link>
                <li className="lk">                 
                     <input type="text" name="q" placeholder="Search"/>
                </li>
          </ul>
        </nav>
     </div>

    </>
    )
}

export default Header;
