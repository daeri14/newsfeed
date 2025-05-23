import React from 'react'; 
import { categoryNames } from '../../utils.js'; 
import './Navigation.css'; 
import logo from './img/logo (2).png'; 

console.log('hello'); 

export const Navigation = ({ onNavClick, currentCategory, className = '', placement = 'header' }) => { 
return ( 
<nav className={`grid navigation navigation--${placement} ${className}`}> 
<a className="navigation__logo" data-href="index" href="#"> 
<img className="navigation__logo-image" src={logo} alt="Логотип" /> 
</a> 
<ul className="navigation__list"> 
{['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => { 
return ( 
<li className="navigation__item" key={item}> 
<a 
onClick={onNavClick} 
className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : '' }`} 
data-href={item} 
href="#" 
> 
{categoryNames[item]} 
</a> 
</li> 
) 
})} 
</ul> 
</nav> 
) 
}
