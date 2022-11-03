import "./Sub.css"
import MapDiv from "./MapDiv";
import main_logo from "./images/main_logo.png"

const Sub = () => {
    const init = () => {
        document.write("init");
        var category = document.getElementById("categorySelect");
        var selectedCategory = sessionStorage.getItem('saveData');
        console.log("hello", selectedCategory);
        if(selectedCategory === "food") {
            category.value = "맛집";
        } else if(selectedCategory === "activity") {
            category.value = "액티비티"
        } else if(selectedCategory === "lodging") {
            category.value = "숙소";
        } else {
            category.value = "명소";
        }
    }

    return (
        <>
            <header>
                <img id="logo" src={main_logo} alt="어드레감디"/>
            </header>
            <section id="search" onLoad={init}>
                <select id="categorySelect">
                    <option>맛집</option>
                    <option>액티비티</option>
                    <option>숙소</option>
                    <option>명소</option>
                </select>
                <input id="searchInput" type="text" size="50" defaultValue=""/>
                <input id="searchBtn" type="button" defaultValue="검색"/>
            </section>
            <MapDiv />
        </>
    )
}

export default Sub;