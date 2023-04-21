import React from 'react'
import Link from 'next/link'



type productList = {
    productData: any
  }
  


export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const productData = await res.json()
    console.log(productData)
   


    return {
      props: {productData}
    }
  }

const index = ({ productData }: productList)=> {
    console.log("datos", productData)

  return (
    

    <div className='product__container'>
        

          {productData.slice(0, 6).map((product: any) => (
            <div className='product'>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.image} alt={product.title} />
                    <Link href={`/products/${product.id}`}>Detail</Link>
            </div>
 

    ))}

    </div>

  )
}




export default index

