import styled from 'styled-components';
export const ChatDiv = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
flex-direction:column;

`;
export const Container = styled.div`
  width: 100%;
  height: 100px;
  /* display: flex;
  text-align: center; */
`;

export const Threepoint = styled.div`
  width: 5%;
  height: 30px;
  display: flex;
  background: #205c8b;
  border: 1px solid #205c8b;
  border-radius: 55px;
  color: #ffff;
  text-align: center;
  border-bottom-left-radius: 0px;
  margin-left: 1%;
  margin-top: 5%;
`;

export const Div = styled.div`
  width: 100%;
  margin-top: 11%;
  margin-left: 19%;
  animation: example2 2s forwards;
`;
export const Yesbutton = styled.button`
  width: auto;
  height:auto;
  padding:25px;
  font-size: 1em;
  background-color: #8bcbca;
  color: white;
  border: none;
  border-radius: 5px;
  user-select: none;
`;
export const Nobutton = styled.button`
  background-color: white;
  color:#8bcbca;
  border: 2px solid #8bcbca;
  width: auto;
  height: auto;
  padding:25px;
  border-radius: 5px;
  margin-left: 1%;
  user-select: none;
`;
export const Listmass = styled.p`
  width: auto;
  height: auto;
  /* background: #e5e5e5; */
  background: ${props => props.backgroundColor};

  border-radius: 15px;
  /* color: #000000; */
  color: ${props => props.fontColor};

  text-align: center;
  font-size: 0.9em;
  /* padding-top: 1%;
  margin-left: 3%; */
  padding: 25px;
`;
export const UserDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* margin-top: 4%;
  margin-left: 4%; */
  animation: example 2s forwards;
`;
export const InputButton = styled.input`
  border: 0px;
  border-bottom: 2px solid #8bcbca;
  /* margin: 6% auto 6% auto; */
  font-size: 1.2em;
  padding: 10px;
`;
export const ImageInput = styled.input`
  width: 3%;
  height: 30px;
  border-radius: 5px;
  user-select: none;
`;
export const DivImage = styled.div`
  width: 100%;
  display: flex;
`;

