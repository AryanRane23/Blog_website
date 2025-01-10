import { useEffect, useState } from "react";
import axios from "axios";

const Nature = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Nature", per_page: 1 },
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
        Nature - Embracing the Beauty of the Natural World
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Nature"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        Nature is a masterpiece of beauty, diversity, and resilience. It encompasses everything from the vast oceans and towering mountains to the delicate ecosystems hidden in a single forest. In an age where technology and urbanization dominate, reconnecting with nature is more important than ever.
        <br />
        <br />
        The allure of nature lies in its ability to inspire, heal, and teach us valuable lessons:
        <ul className="list-disc ml-5">
          <li>The vastness of the sky and the ocean reminds us of the boundless possibilities in life.</li>
          <li>The cycles of the seasons reflect the rhythms of growth, change, and renewal.</li>
          <li>The intricate balance in ecosystems demonstrates the importance of harmony and interdependence.</li>
        </ul>
        <br />
        Nature’s Role in Our Lives:
        <ul className="list-disc ml-5">
          <li>
            It offers a sense of peace and relaxation. Spending time outdoors, whether hiking in the mountains or strolling through a park, can reduce stress and improve mental health.
          </li>
          <li>
            Nature is a source of inspiration for art, science, and innovation. Many groundbreaking discoveries and creative masterpieces have been influenced by observing the natural world.
          </li>
          <li>
            It provides resources essential for life, from clean air and water to the materials we use daily.
          </li>
        </ul>
        <br />
        Challenges Facing Nature:
        <br />
        <p>
          Despite its resilience, nature is under significant threat from human activities. Deforestation, pollution, climate change, and habitat destruction are causing irreversible damage to ecosystems and biodiversity. Protecting nature is not just about conserving beauty—it’s about preserving life on Earth.
        </p>
        <br />
        Embracing and protecting nature is a responsibility we all share. Whether through small actions like planting a tree or larger efforts like advocating for sustainable policies, we can all contribute to ensuring that future generations can experience the wonder and tranquility of the natural world.
      </div>
    </div>
  );
};

export default Nature;
