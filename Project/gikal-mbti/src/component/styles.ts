import styled from '@emotion/styled';

export const MainImg = styled.img`
  display:inline-block;
  width:90vw;
  box-shadow: 9px 8px 6px black;

  @media(max-width:677px){
    width:96vw;
    margin-top:5vh;
  }
`;

export const MainTitle = styled.p`
  padding:7vh 0 3vh;

  font-family: 'DungGeunMo';
  color:white;

  font-size:30px;
`;

export const GoTest = styled.a`
  display:block;
  font-size:19px;
  color:white;
  text-decoration: none;

  &:hover{
    transform: scale(1.1);
  }

  @media(max-width:677px){
    padding-top:15vh;
  }
`;

export const Spacer = styled.div`
  width:100%;
  height:15vh;

  @media(max-width:677px){
    height:25vh;
  }
`;
