import styled from 'styled-components';
export const ChatDiv = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
flex-direction:column;
margin-left:33.5%;

`;
export const Container = styled.div`
  width: 100%;
  height: 100px;
  
`;

export const Threepoint = styled.div`
display:flex;
justify-content:center;

  width: 12%;
  height: 27px;
  display: flex;
  background: #0000;
  margin-left: 1%;
  margin-top: 5%;
  box-shadow: 3px 5px 8px #cccccc;
  padding-top:3%;
`;

export const Div = styled.div`
  width: 100%;
  margin-top: 4%;
  animation: example2 2s forwards;
`;
export const Yesbutton = styled.button`
  width: auto;
  height:auto;
  padding:20px;
  font-size: 1em;
  background-color: #8bcbca;
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
`;
export const Nobutton = styled.button`
  background-color: white;
  color:#8bcbca;
  border: 2px solid #8bcbca;
  width: auto;
  height: auto;
  padding:20px;
  border-radius: 10px;
  margin-left: 1%;
  outline: none;
`;
export const Listmass = styled.p`
  width: auto;
  height: auto;
  background: ${props => props.backgroundColor};

  border-radius: 15px;
  color: ${props => props.fontColor};

  text-align: center;
  font-size: 0.9em;

  padding: 25px;
`;
export const UserDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
  animation: example 2s forwards;
`;
export const InputButton = styled.input`
  border: 0px;
  border-bottom: 2px solid #8bcbca;
 width:30%;
  font-size: 1.2em;
  padding: 10px;
  outline: none;

`;
export const ImageInput = styled.input`
  width: 3%;
  height: 30px;
  border-radius: 5px;
  user-select: none;
  margin-top:2%;
  z-index:1;
  outline: none;

`;
export const DivImage = styled.div`
  width: 100%;
  display: flex;
  margin-left:45%;
`;

