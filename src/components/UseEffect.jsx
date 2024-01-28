import {useState, useEffect} from 'react'

const UseEffect = () => {
    let [count, setCount] = useState(1);
    let [product, setProduct] = useState({});
  
    useEffect(() => {
      // get the product data
      let getData = async (num) => {
        const data = await fetch(`https://fakestoreapi.com/products/${num}`);
        const json = await data.json();
        return json;
      }
    
      // set return data form the api to product object
      getData(count).then(res => {
        setProduct(res)
      })
    }, [count]);// every time count changes, do this
  
    return (
      <>
      <div>
        <p>{count}. {product.title}</p>
        <img src={product.image} alt="image" width="100px"/>
      </div>
      <button onClick={() => setCount(count + 1)}>Next Product</button>
      </>
    );
}

export default UseEffect;