import './App.css'
import Container from './Container'
import Product from './Product'

function App() {

  const product = {
    productName: "Pantolon",
    price: 900
  }

  return (
      <div>
        <Product productName="Ayakkabi" price={3200} />
        <hr style={{border:"1px solid blue"}} />
        <Product productName={product.productName} price={product.price} />
        <hr style={{border:"1px solid blue"}} />
        <Container>
          <Product productName="Ceket" price={1500} />
        </Container>
      </div>
  )
}

export default App
