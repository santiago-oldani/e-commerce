import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';
import WidgetCartContextProvider from './context/WidgetCartContext';
import Landing from './components/Landing';
import AlertContextProvider from './context/AlertContext'
import ProductsContextProvider from './context/ProductsContext'
import Footer from './components/Footer';
import styled from '@emotion/styled';
import RemoveFiltersProvider from './context/RemoveFilters';

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

      <CartContextProvider>
        <WidgetCartContextProvider>
          <AlertContextProvider>
            <ProductsContextProvider>
              <RemoveFiltersProvider>

                <BrowserRouter>
                  <NavBar />
                  <MainContainer>
                    <Routes>
                      <Route path='*' element={<Landing />} />
                      <Route path='/' element={<Landing />} />
                      <Route path='/products/:gender/' element={<ItemListContainer />} />
                      <Route path='/:categoria/:id' element={<ItemListContainer />} />
                      <Route path='/item/:id' element={<ItemDetailContainer />} />
                      <Route path='/cart' element={<Cart />} />
                    </Routes>
                  </MainContainer>
                  <Footer />
                </BrowserRouter>

              </RemoveFiltersProvider>
            </ProductsContextProvider>
          </AlertContextProvider>
        </WidgetCartContextProvider>
      </CartContextProvider>
      
    </LandingContainer>
  );
}

export default App;
