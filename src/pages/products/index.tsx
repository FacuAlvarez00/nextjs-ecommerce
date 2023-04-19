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
    

    <div>
        

          {productData.map((product: any) => (
            <>
                <h1>{product.title}</h1>
                    <Link href={`/products/${product.id}`}>Detail</Link>
            </>
 

    ))}

    </div>

  )
}




export default index

