import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ImgSection() {
  const [imgs, setImg] = useState(['aag']);

  useEffect(() => {
    axios
      .get(`https://api.memegen.link/images/`)
      .then((res) => {
        console.log(res);
        setImg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {imgs.map((img) => (
        <img src={img.template} />
      ))}
    </div>
  );
}
