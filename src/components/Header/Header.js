import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';

class Header extends Component {
    /*
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
        console.log(this.refs.myDiv.getAttribute('class'));
    }
    
    resizeHeaderOnScroll() {
        console.log(this.refs.myDiv.getAttribute('class'));
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200,
          logoEl = this.refs.myDiv.getAttribute('class');
    
        if (distanceY > shrinkOn) {
          logoEl.classList.add("smaller");
        } else {
          logoEl.classList.remove("smaller");
        }
    }
    */

    render() {
        return (
        <header>
            <div>
                <div className="logo" ref="myDiv">
                    <NavLink to="/">LOGO</NavLink>
                </div>
                
                {/*<nav>
                    <ul>
                        <li><NavLink to="/#" activeClassName="selected">ABOUT</NavLink></li>
                        <li><NavLink to="/#" activeClassName="selected">DONATE</NavLink></li>
                        <li><NavLink to="/#" activeClassName="selected">CONTACT</NavLink></li>
                    </ul>
                </nav>*/}
            </div>
        </header>
        );
    }
}

export default Header;