import { useEffect, useState } from "react";
import axios from "axios";

const Design = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Design", per_page: 1 },
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
        Designing - Crafting Visual Stories
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Designing"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        Designing is much more than just arranging colors and shapes. It’s about storytelling, problem-solving, and creating experiences that resonate with people. Whether it’s the layout of a website, the design of a product, or the branding of a company, design plays a crucial role in shaping perceptions and driving engagement.
        <br />
        <br />
        The art of designing encompasses several fields:
        <ul className="list-disc ml-5">
          <li>Graphic design focuses on creating visual content for communication, including logos, brochures, and advertisements.</li>
          <li>UI/UX design combines creativity and technology to design user interfaces that are intuitive and enjoyable to use.</li>
          <li>Product design aims to create functional, aesthetically pleasing products that solve real-world problems.</li>
          <li>Interior design emphasizes designing and decorating indoor spaces to create a cohesive and inviting environment.</li>
        </ul>
        <br />
        Key elements of effective design include:
        <ul className="list-disc ml-5">
          <li>Typography, which involves choosing the right fonts to convey a message effectively and add character to the design.</li>
          <li>Understanding color theory to see how colors interact and evoke emotions, a critical aspect of impactful designs.</li>
          <li>Proper use of whitespace, ensuring clarity and enhancing the overall composition of the design.</li>
          <li>Consistency, which maintains a unified style throughout the design to build trust and recognition.</li>
        </ul>
        <br />
        In today’s world, design influences how we interact with products, how we perceive brands, and even how we experience our surroundings. A well-executed design isn’t just beautiful—it’s functional, meaningful, and timeless.
      </div>
    </div>
  );
};

export default Design;
