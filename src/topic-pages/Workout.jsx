import { useEffect, useState } from "react";
import axios from "axios";

const Workout = () => {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: "Workout", per_page: 1 },
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
        Workout - Strength for the Body and Mind
      </h1>
      <div className="gap-4 flex justify-center mb-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description || "Workout"}
            className="rounded-lg shadow-md w-[600px]"
          />
        ))}
      </div>
      <div className="descr text-lg">
        A workout is more than just exercise—it’s a commitment to personal well-being. Whether it’s lifting weights, running, or practicing yoga, regular physical activity is essential for a healthy and balanced life.
        <br />
        <br />
        Benefits of Working Out:
        <ul className="list-disc ml-5">
          <li>Improves cardiovascular health and overall endurance.</li>
          <li>Strengthens muscles and bones, reducing the risk of injury.</li>
          <li>Boosts mental health by releasing endorphins and reducing stress.</li>
          <li>Enhances focus, discipline, and productivity.</li>
        </ul>
        <br />
        Types of Workouts:
        <p>
          Everyone’s fitness journey is unique. Some prefer high-intensity interval training (HIIT) for quick results, while others enjoy the calm and flexibility that yoga provides. Whatever your preference, consistency is key.
        </p>
        <br />
        Embrace the workout as a way to challenge yourself, build resilience, and achieve your fitness goals. A stronger body leads to a stronger mind.
      </div>
    </div>
  );
};

export default Workout;
