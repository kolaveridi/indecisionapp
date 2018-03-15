import React from 'react';
export default class Action extends React.Component{
   render(){
      var flag=false;
      var number=this.props.total;
      if(number>0)
      flag=true;
      return(
       <div>
        <button  onClick={this.props.handlepick} disabled={!flag} >What should I do </button>
        </div>
     );
   }
}
