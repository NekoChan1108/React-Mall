import Navigation from "./Navigation/Navigation.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Products from "./Products/Products.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import {useState} from "react";
import products from "./db/data.jsx";
import Card from "./components/Card.jsx";
import "./index.css";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [query, setQuery] = useState("")
    //设置查询的条件变化
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    //设置查询的输入框
    const filteredItems = products.filter((product) => {
        return product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    })
    //设置选择的radio变化
    const handleRadioChange = (event) => {
        setSelectedCategory(event.target.value)
    }
    //设置点击按钮的分类
    const handleButtonClick = (event) => {
        setSelectedCategory(event.target.value)
    }
    //设置整体的filter
    /**
     * 筛选数据
     * @param products  数据源
     * @param selected  点击按钮 点击radio
     * @param query  输入框的查询条件
     */
    const filterProducts = (products, selected, query) => {
        let filteredProducts = products
        if (query) {
            filteredProducts = filteredItems
        }
        if (selected) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.category === selected ||
                    product.color === selected ||
                    product.company === selected ||
                    product.newPrice === selected ||
                    product.title === selected
            })
        }
        return filteredProducts.map((product) => (
            <Card
                key={Math.random()}
                img={product.img}
                title={product.title}
                star={product.star}
                reviews={product.reviews}
                newPrice={product.newPrice}
                oldPrice={product.prevPrice}
            />
        ))
    }
    const results = filterProducts(products, selectedCategory, query)
    console.log(results)
    return (
        <div>
            <SideBar handleRadioChange={handleRadioChange}/>
            <Navigation query={query} handleInputChange={handleInputChange}/>
            <Recommended handleButtonClick={handleButtonClick}/>
            <Products results={results}/>
        </div>
    )
}

export default App
