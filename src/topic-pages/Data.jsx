import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
    const [images, setImages] = useState([]);
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos`,
                    {
                        params: { query: "Data Science", per_page: 1 },
                        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
                    }
                );
                setImages(response.data.results);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4  flex justify-center ">Data Science - A journey towards innovation and intelligence</h1>
            <div className=" gap-4  flex justify-center mb-6">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.urls.regular}
                        alt={image.alt_description || "Data Science"}
                        className="rounded-lg shadow-md w-[600px] "
                    />
                ))}
            </div>
            <div className="descr ">
                In today's world, data is more than just numbers; it’s a powerful asset that drives decision-making, shapes business strategies, and influences innovations across every industry. From healthcare to finance, entertainment to retail, data science is revolutionizing the way organizations operate and make decisions. But what exactly is data science, and why is it so important?
                <br /> <br />

                Data science is an interdisciplinary field that combines statistics, computer science, domain knowledge, and data analysis to extract meaningful insights from large volumes of structured and unstructured data. It involves a combination of techniques such as machine learning, data mining, predictive modeling, and statistical analysis to turn raw data into actionable insights.

                At the heart of data science lies the ability to understand and interpret data in a way that can predict future trends, identify patterns, and provide recommendations that can be used to make informed decisions.

                The Key Components of Data Science
                To truly understand the scope of data science, it’s important to break down its core components. These elements are fundamental to what makes data science such a powerful tool:
                <br /><br /><br />
                <b >Data Collection: </b>The first step in data science is collecting data. This can come from various sources, including , websites, social media, databases,etc. The quality of data is to ensure the accuracy of the analysis.
                <br />
                <b> Data Cleaning: </b> Raw data is often messy and incomplete, requiring significant cleaning and preprocessing. This step involves handling missing values, dealing with duplicates, and transforming data into usable .
                <br />
                <b>Data Exploration: </b>Once the data is cleaned, data scientists explore the data to identify patterns, trends, and correlations. This step often involves visualizing data using graphs and charts to gain initial insights.
                <br /><br />
               </div>
        </div>

    );
};

export default Data;
