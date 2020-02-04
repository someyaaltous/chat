import React, { Component } from 'react';
import {
  Listmass,
  Yesbutton,
  Threepoint,
  Div,
  Nobutton,
  Container,
  User,
  UserDiv
} from './index.style';
import user from '../../assest/user.png';

class Chat extends Component {
  state = {
    messages: ['This is still Aftab, right?'],
    allMessages: [],
    loading: false
  };
  iterval;

  componentDidMount() {
    let i = 0;
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
    this.iterval = setInterval(() => {
      this.setState(
        {
          allMessages: [...this.state.allMessages, this.state.messages[i]],
          loading: false
        },
        () => {
          i++;
        }
      );
    }, 2500);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.allMessages.length === 1 &&
      prevState.allMessages.length !== this.state.allMessages.length
    ) {
      clearInterval(this.iterval);
      this.setState({ loading: false });
    } else if (prevState.allMessages.length !== this.state.allMessages.length) {
      setTimeout(() => {
        this.setState({ loading: true });
      }, 1000);
    }
  }
  render() {
    return (
      <>
        <Container>
          {this.state.loading && <Threepoint><div className="hh1"></div><div className="hh2"></div><div className="hh3"></div></Threepoint>}
        </Container>
        {this.state.allMessages.map(ele => (
          <>
            <UserDiv>
              <Listmass>{ele}</Listmass>
            </UserDiv>
            <Div>
              <Yesbutton>yeah I'm</Yesbutton>

              <Nobutton>Nope it's someone else</Nobutton>
            </Div>
          </>
        ))}
      </>
    );
  }
}
export default Chat;
