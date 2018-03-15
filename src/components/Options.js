import React  from 'react';
import Option from './Option.js';
 export default class Options extends React.Component{
     render(){
       const optionsarr=this.props.options;
       const handledeleteoption=this.props.handledeleteoption;
       const handledeleteoptions=this.props.handledeleteoptions;
       return(
         <div>
       <button className="removeall" onClick={handledeleteoptions} >Remove all </button>
        {
        optionsarr.map((word)=>(
         <Option
          handledeleteoption={handledeleteoption}
          optiontext={word}/>
        ))
       }
        </div>
       );
     }

}
