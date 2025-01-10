import { useEffect, useState } from "react";
import axios from "axios";

const Coding = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Coding", per_page: 1 },
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
        Coding - The Language of Technology
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Coding"}
            className="rounded-lg shadow-md w-[250px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        Coding is the backbone of the digital world. It’s the process of writing instructions in a language that computers can understand to perform specific tasks. From simple scripts that automate daily tasks to complex systems that power websites, apps, and even artificial intelligence, coding is everywhere.
        <br />
        <br />
        Why Learn Coding?
        <ul className="list-disc ml-5">
          <li>
            Coding enables you to create solutions to real-world problems, whether it’s developing a website for a small business or building a tool to analyze data.
          </li>
          <li>
            It fosters creativity and logical thinking, helping you approach problems in innovative ways.
          </li>
          <li>
            Coding is a valuable skill in today’s job market, offering opportunities in fields like web development, data science, and game design.
          </li>
        </ul>
        <br />
        Tools and Languages:
        <p>
          Coding offers a wide array of languages and tools tailored to different purposes. For instance, HTML, CSS, and JavaScript are essential for web development, while Python and R are popular for data analysis. Knowing the right tool for the job is key to efficient coding.
        </p>
        <br />
        Beyond Syntax:
        <p>
          Coding is not just about learning syntax; it’s about problem-solving and building efficient solutions. It involves understanding algorithms, optimizing performance, and creating code that’s readable and maintainable.
        </p>
        <br />
        Coding is more than a technical skill—it’s a superpower that allows you to build, innovate, and transform the way the world works.
      </div>
    </div>
  );
};

export default Coding;
