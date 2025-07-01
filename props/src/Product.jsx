import React from 'react'

function Product({productName, price}) {
  // const {productName, price} = props;
  return (
    <div>
        <div style={{textAlign: 'center',fontSize: '24px',fontWeight: 'bold',marginBottom: '20px' }}>PRODUCT INFO</div>
        <div>
            <div>{productName}</div>
            <div>FIYAT: {price}</div>
        </div>
    </div>
  )
}

export default Product