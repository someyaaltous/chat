import React, { Component } from 'react';
import {
  Listmass,
  Yesbutton,
  Threepoint,
  Div,
  Nobutton,
  Container,
  UserDiv,
  InputButton,
  ImageInput,
  DivImage,
  ChatDiv
} from './index.style';
import input from '../../assest/input.png';

class Chat extends Component {
  state = {
    messages: [
      'Hey! My name is Paul, a brain preserved in a glass jar somewhere in Spain.',
      'Ill be your virtual guide today.',
      'And you are?'
    ],
    allMessages: [],
    loading: false,
    valueName: '',
    submitButton: false,
    newMassages: [],
    yesSubimitButton: false,
    noSubimitButtin: false
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
      this.state.allMessages.length === 3 &&
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
  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.valueName !== '') {
      this.setState({
        submitButton: true,
        newMassages: [
          `Nice to virtually meet you, ${this.state.valueName}`,
          'This is an interactive article. Ill add some “writers cut” commentary and provide a bit of banter throughout the article.',
          'By the way, you can toggle the conversation on and off whenever you like.',
          'Just click the little blue button in the bottom right-hand corner if you want me to shut up.',
          'Thanks for experimenting with us and enjoy the ride. Shall we?'
        ]
      });
    } else {
      this.setState({ submitButton: false });
    }
  };
  clickYesButton = () => {
    this.setState({ yesSubimitButton: true });
  };
  clickNoButton = () => {
    this.setState({ noSubimitButtin: true });
  };
  render() {
    console.log(this.state.newMassages);

    return (
      <>
        <ChatDiv>
          <Container>
            {this.state.loading && (
              <Threepoint>
                <div className='hh1'></div>
                <div className='hh2'></div>
                <div className='hh3'></div>
              </Threepoint>
            )}
          </Container>
          {this.state.allMessages.map(ele => (
            <>
              <UserDiv>
                <Listmass backgroundColor=' #e5e5e5' fontColor='#000000'>
                  {ele}
                </Listmass>
              </UserDiv>

              {/* <p>{this.state.valueName}</p> */}
            </>
          ))}
          {this.state.submitButton ? (
            <>
              <Listmass backgroundColor='#aaa' fontColor='#ffffff'>
                {this.state.valueName}
              </Listmass>

              {this.state.newMassages.map(element => (
                <UserDiv>
                  <Listmass backgroundColor=' #e5e5e5' fontColor='#000000'>
                    {element}
                  </Listmass>
                </UserDiv>
              ))}
              <>
                {this.state.yesSubimitButton ? (
                  <>
                    <Listmass backgroundColor='#aaa' fontColor='#ffffff'>
                      sure! i'll give it a shot
                    </Listmass>

                    <UserDiv>
                      <Listmass backgroundColor=' #e5e5e5' fontColor='#000000'>
                        ¡Qué bueno! Let's begin.
                      </Listmass>
                    </UserDiv>
                  </>
                ) : (
                  null
                )}
                {this.state.noSubimitButtin ? (
                  <Listmass backgroundColor='#aaa' fontColor='#ffffff'>
                    nope. just the article for now please
                  </Listmass>
                ) : null}
                {this.state.yesSubimitButton ||
                this.state.noSubimitButtin ? console.log('...') : (
                  <Div>
                    <Yesbutton onClick={this.clickYesButton}>
                      sure! i'll give it a shot
                    </Yesbutton>

                    <Nobutton onClick={this.clickNoButton}>
                      nope. just the article for now please
                    </Nobutton>
                  </Div>
                )}
              </>
            </>
          ) : null}
          {this.state.allMessages.length === 3 && !this.state.submitButton ? (
            <DivImage>
              <InputButton
                placeholder='type your name here....'
                value={this.state.valueName}
                name='valueName'
                onChange={this.changeInput}
              ></InputButton>
              <ImageInput
                type='image'
                src={input}
                onClick={this.handleSubmit}
              />
            </DivImage>
          ) : null}
        </ChatDiv>
      </>
    );
  }
}
export default Chat;
