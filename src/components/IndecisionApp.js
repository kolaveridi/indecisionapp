import React from 'react';
 import Header from './Header';
 import Action from './Action';
 import Options from './Options';
 import AddOption from './AddOption';

 export default class IndecisionApp extends React.Component{
     state={
       options:['xyz','mango','chicken'],
       selectedOption:undefined
       }
       // generate a random number and that will be our selecged option
       handlepick=()=>{
         var randomNumber = Math.floor(Math.random() * this.state.options.length);
         const option=this.state.options[randomNumber];
         this.setState(() => ({
           selectedOption: option
          }));
       }
       handledeleteoptions=()=>{
         this.setState(()=>({
          options:[]
         }));
       }
       // to delete an individual option
       handledeleteoption=(wordtodelete)=>{
         this.setState((prevstate)=>({
             options:prevstate.options.filter((word)=>wordtodelete!==word)
         }));
       }
       handleaddoption=(word)=>{
         if (!word) {
           return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(word) > -1) {
         return 'This option already exists';
          }
           this.setState(()=>({
             options:this.state.options.concat(word)
           }));

         }

       render(){
        const subtitle='Put your life in the hands of a computer';
        return(
          <div>
          <Header  handlepick={this.handlepick} subtitle={subtitle}/>
          <Action handlepick={this.handlepick}  total={this.state.options.length}/>
          < Options handledeleteoptions={this.handledeleteoptions} options={this.state.options} handledeleteoption={this.handledeleteoption}/>
          <AddOption handleaddoption={this.handleaddoption}/>
          </div>
        );
    }
}
