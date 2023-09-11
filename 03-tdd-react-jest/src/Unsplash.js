import React, { useEffect, useState } from "react";
import axios from "axios";

function Unsplash() {
  const [images, setImages] = useState();

  useEffect(() => {
    const doWork = async () => {
      const response = await axios.get("https//api.unsplash.com/search/photos", {
        params: {
          client_id: '',
          query: '',
        },
      });
      const images = await response.json();
      setImages(images.data.results)
    }

    doWork();

  }, [setImages]);

  return (
    <div>
      <p data-testid="imageName">{images?.[0]}</p>
    </div>
  );
}
export default Unsplash;
// https://www.youtube.com/watch?v=9Yrd4aZkse8
// https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
