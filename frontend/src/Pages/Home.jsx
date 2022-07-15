import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Berita from "../Components/Berita";
import Footer from "../Components/Footer";
function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Berita />
            <Footer />
        </div>
    )
}

export default Home;