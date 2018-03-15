import React from 'react';
import './Option.css';
export default class  Option extends React.Component {
     render(){
       const handledeleteoption=this.props.handledeleteoption;
        return(
            <div>
            {this.props.optiontext}
            <button
             onClick={(e) => {
             this. props.handledeleteoption(this.props.optiontext);
            }}
            className="remove"  >
            remove
            </button>
            </div>
        );
     }
}
