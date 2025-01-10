import { useEffect, useState } from "react";
import axios from "axios";

const React= () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "React", per_page: 1 },
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
        React - The Modern UI Library
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "React"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        React is a JavaScript library designed to build fast, dynamic, and interactive user interfaces. It allows developers to create reusable components that make managing complex applications more efficient and enjoyable.
        <br />
        <br />
        Why React Stands Out:
        <p>
          React's component-based architecture encourages modular development, allowing developers to break down interfaces into smaller, reusable pieces. With virtual DOM rendering, React ensures high performance even in applications with frequent updates.
        </p>
        <br />
        Key Features:
        <ul className="list-disc ml-5">
          <li>
            Declarative Syntax: Makes it easier to describe the UI and predict its behavior.
          </li>
          <li>
            JSX: Combines HTML and JavaScript for a more intuitive coding experience.
          </li>
          <li>
            Unidirectional Data Flow: Provides better control and debugging capabilities.
          </li>
          <li>
            Ecosystem: Works seamlessly with tools like Redux, React Router, and Next.js.
          </li>
        </ul>
        <br />
        React has become a cornerstone of modern web development, empowering developers to create everything from small projects to enterprise-level applications with efficiency and style.
      </div>
    </div>
  );
};

export default React;
