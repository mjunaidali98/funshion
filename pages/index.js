import dynamic from "next/dynamic"
const Layout = dynamic(() => import("/components/layout"))
const Homepage = dynamic(() => import("/components/homepage"))

const Index = ({ products }) => {
 
  return (
    <Layout>
      <Homepage products={products} />
    </Layout>
  )
}
export default Index

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}/products?limit=5`);
  const products = await res.json();
  return {
    props: { products }
  };
}