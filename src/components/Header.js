import React from 'react';
import './Header.css';
 export default class Header extends React.Component{
    render(){
      const title='IndecisionApp';
      const subtitle=this.props.subtitle;
      return(
        <div className="header">
        <h1>{title}</h1>
        <p className="para">{subtitle}</p>
        </div>
      );
    }
}
