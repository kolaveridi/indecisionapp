import React from 'react';
export default class AddOption  extends React.Component{
      handleaddoption=(event)=>{
        event.preventDefault();
        const word=event.target.elements.option.value.trim();
        console.log(word);
         const error=this.props.handleaddoption(word);
      }
     render(){
       return(
         <div>
          <form onSubmit={this.handleaddoption}>
          <input type="text" name="option"/>
          <button >AddOption</button>

          </form>
        </div>
       );
     }
}
