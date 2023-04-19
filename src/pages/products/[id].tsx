import { GetStaticProps } from "next"


type ProductProps = {
  data: any
}



export const getStaticPaths = async () => {

  const res = await fetch("https://fakestoreapi.com/products/")
  const entries = await res.json()
  const ids = entries.map((item: any) => (item.id))
  const paths = ids.map((item: any) => ({params: { id: item.toString() }}))
  console.log("paths", paths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
  const data = await res.json()


 
  return {
    props: {data} ,

  }
  
}


const Product = ( data : ProductProps) => {
    console.log(data)
  
  return (
    <>
        <h1>hola</h1>
        <h1>{data.data.title}</h1>
         


      
      
    
    </>
  )
}


export default Product