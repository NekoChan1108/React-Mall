import Navigation from "./Navigation/Navigation.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Products from "./Products/Products.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import {useState} from "react";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")
    //设置查询的条件变化
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div>
            <SideBar/>
            <Navigation/>
            <Recommended/>
            <Products/>
        </div>
    )
}

export default App
