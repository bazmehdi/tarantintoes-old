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
                    <NavLink to="/">TARANTINTOES</NavLink>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;