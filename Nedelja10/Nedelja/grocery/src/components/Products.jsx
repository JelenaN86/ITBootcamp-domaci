import Product from "./Product"

const Products = ({ products, category}) => {
    let filtered = []
    if (category) filtered = products.filter(el => el.category === category)

    return category ?
        <>
            {filtered.map(product => <Product key={product.id} product={product} length={filtered.length}/>)}
        </>
        :
        <>
            {products.map(product => <Product key={product.id} product={product} />)}
        </>
}

export default Products