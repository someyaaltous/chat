import React, { Component } from 'react';

class Chat extends Component {
state = {
          messages: ['msg1', 'msg2', 'msg3'],
            allMessages: []
}
iterval;

componentDidMount() {
 let i = 0;
        this.iterval = setInterval(() => {
            this.setState({allMessages: [...this.state.allMessages, this.state.messages[i]]}, () => {
                i++;
            });
        }, 2000);
}
    componentDidUpdate(prevProps: any) {
        if(this.state.allMessages.length === 3) {
            clearInterval(this.iterval)
        }
}
    render() {
        return (
            <React.Fragment>
                {this.state.allMessages.map((ele) => <li>{ele}</li>)}
            </React.Fragment>
        );
    }
  }
export default Chat;
