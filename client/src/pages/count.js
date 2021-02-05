import React from "react";
import CountContainer from '../components/CountContainer';

class Count extends React.Component {
  //passing date down to child so it won't reset on state change rerender
  constructor(props){
    super(props)
    this.state = {
      date: Date.now() + 900000
    }
  }
  
  render(){
  return (
  <div>
  <CountContainer date={ this.state.date }/>
  </div>
  )
  };
};
export default Count;