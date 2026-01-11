import NavBar from './components/NavBar';
import ItemListContainer from './components/item_products/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/item_products/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Landing from './components/landing/Landing';
import Footer from './components/Footer';
import styled from '@emotion/styled';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.main`
  flex: 1;
`

function App() {
  return (
    <LandingContainer>
      <NavBar />
      <MainContainer>
        <Routes>
          <Route path='*' element={<Landing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/products/:gender/' element={<ItemListContainer />} />
          <Route path='/:categoria/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </MainContainer>
      <Footer />
    </LandingContainer>
  );
}



export default App;
