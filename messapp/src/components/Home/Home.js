import React, { useState } from 'react';
import items from "../../staticData/data";
import Categories from "../Categories/Categories";
import Menu from '../Menu/Menu';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styles
// import './Home.css'; // Import custom CSS file for additional styles

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Home = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categoriesList, setCategoriesList] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    };

    return (
        <main>
            <div className='title'>
                <h2>Mess App</h2>
                <div className='underline'></div>
            </div>
            <section className='carousel-section'>
                <Carousel interval={1000} pause={false} className="custom-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://img.freepik.com/free-photo/newly-prepared-egg-salad-sandwich_125540-4433.jpg?ga=GA1.1.1286398437.1719815925&semt=sph"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://img.freepik.com/free-photo/iced-coffee-drinks-made-with-hot-brewed-coffee-ice_157027-4470.jpg?ga=GA1.1.1286398437.1719815925&semt=sph"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?ga=GA1.1.1286398437.1719815925&semt=sph"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246085.jpg?ga=GA1.1.1286398437.1719815925&semt=sph"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className='menu section'>
                <Categories categories={categoriesList} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default Home;
