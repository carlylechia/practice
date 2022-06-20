import Link from "next/link"

function ProductList({ productid }) {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h2>
        <Link href={`/products/${productid = 1}`}>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productid = 2}`}>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productid = 3}`} replace>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productid = 4}`}>
          <a>Product 4</a>
        </Link>
      </h2>
    </>
  )
}

export default ProductList
