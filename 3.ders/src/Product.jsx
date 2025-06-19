import React from 'react'

function Product(props) {
  return (
    <div>
        <div style={{textAlign: 'center',fontSize: '24px',fontWeight: 'bold',marginBottom: '20px' }}>PRODUCT INFO</div>
        <div>
            <div>{props.productName}</div>
            <div>FIYAT: {props.price}</div>
        </div>
    </div>
  )
}

export default Product