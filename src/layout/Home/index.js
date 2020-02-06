import React, { Component } from 'react';
import Chat from '../../component/Chat';
import Live from '../../component/Live';

class Home extends Component {
  state = {
    scroll1: false,
    a:0
  };
 a= setInterval(() => {
    window.scrollY>100 && !this.state.scroll1 ? this.setState({scroll1:true}):console.log("44444")
    // console.log("00000000000")
  }, 100);
 

  render() {
    // this.hi()
    // window.scroll(100,150)
    console.log("0000 ",window.scrollY)
    return (
      <>
          {this.state.scroll1?   clearInterval(this.a) :null}
        <Live />
        {/* {window.scrollY>1? <Chat />:console.log(this.state.scroll1,'00000')} */}
        {this.state.scroll1? <Chat />:console.log(this.state.scroll1,'00000')}
        <div style={{height:"500px"}}></div>
      </>
    );
  }
}
export default Home;
