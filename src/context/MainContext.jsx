import { createContext, useState } from "react";
import { useEffect } from "react";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => { 

    const [selectedCategory, setSelectedCategory] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(res => res.json())
        .then(data => setFilteredProducts(data))
  }, [selectedCategory]);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
    console.log(category)
    console.log(filteredProducts)
  }


  return (
    <Provider 
      value={{
        handleSelectedCategory,
        filteredProducts
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };