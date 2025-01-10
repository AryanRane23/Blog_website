import { useEffect, useState } from "react";
import axios from "axios";

const SelfImprovement = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Self Improvement", per_page: 1 },
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
        Self Improvement - The Path to Personal Growth
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Self Improvement"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr ">
        Personal development, or self-improvement, is an ongoing process of self-discovery, learning, and growth. It involves improving one’s skills, knowledge, and mindset to become a better person—whether in your personal life, career, or overall well-being.
        <br /> <br />
        Self-improvement is about taking action to better oneself. This can mean setting goals, breaking them down into manageable steps, and committing to self-discipline and positive change.
        <br /> 
        Key components of self-improvement:
        <br /><br />
        <strong>1. Self-awareness</strong>: Understanding your own strengths, weaknesses, emotions, and behaviors.
        <br />
        <strong>2. Goal Setting</strong>: Establishing clear, actionable, and realistic goals.
        <br />
        <strong>3. Mindfulness</strong>: Staying present and engaged in the moment.
        <br />
        <strong>4. Time Management</strong>: Organizing and prioritizing tasks effectively.
        <br />
        <strong>5. Resilience</strong>: Building the mental strength to overcome challenges and setbacks.
      </div>
    </div>
  );
};

export default SelfImprovement;
