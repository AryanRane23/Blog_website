import { useEffect, useState } from "react";
import axios from "axios";

const Tech = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Technology", per_page: 1 },
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
      <h1 className="text-3xl font-bold mb-4 flex justify-center">
        Technology - The Driver of Progress
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Technology"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        Technology is at the heart of human innovation, shaping how we live, work, and interact with the world around us. It has revolutionized industries, accelerated communication, and made the impossible possible.
        <br />
        <br />
        The Role of Technology:
        <p>
          From the advent of the internet to breakthroughs in artificial intelligence and biotechnology, technology has been the key to unlocking new frontiers of knowledge and productivity. It’s the foundation of our digital age, powering everything from smartphones to space exploration.
        </p>
        <br />
        Major Trends:
        <ul className="list-disc ml-5">
          <li>Artificial Intelligence and Machine Learning: Redefining automation and decision-making.</li>
          <li>Cloud Computing: Enabling scalable and flexible storage solutions.</li>
          <li>Blockchain: Revolutionizing trust and security in transactions.</li>
          <li>IoT: Connecting devices to create smarter environments.</li>
        </ul>
        <br />
        Technology continues to push boundaries, offering endless possibilities for innovation and growth. It’s a tool, a medium, and a catalyst for change.
      </div>
    </div>
  );
};

export default Tech;
