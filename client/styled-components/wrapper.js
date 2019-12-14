import styled from 'styled-components';

let Wrapper = {};

Wrapper.Global = styled.div``;
Wrapper.Body = styled.div`
  display: flex;
  flex-direction: row;
`;
Wrapper.FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin: auto;
`;
Wrapper.Navbar = styled.div`
  position: fixed;
  z-index: 2;
`;
Wrapper.Graph = styled.div`
  text-size: 36px;
`;
Wrapper.About = styled.div``;
Wrapper.News = styled.div``;
Wrapper.Ratings = styled.div``;
Wrapper.Earnings = styled.div``;
Wrapper.SecondColumn = styled.div``;
Wrapper.TradeStock = styled.div`
  position: fixed;
  left: 1077px;
  top: 84px;
`;
Wrapper.App = styled.div`
  outline: none !important;
`;
Wrapper.ModalRoot = styled.div`
  position: absolute;
  top: 1000px;
  left: 400px;
`;

export default Wrapper;
