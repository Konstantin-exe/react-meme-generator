import { useState } from 'react';
import axios from 'axios';

export default function ImgSection() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.memegen.link/images/${ImgSection}`)
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
      <img onChange ={(event => { setImg(event.currentTarget.value);}) src={meme.blank} />
    </div>
  );
}
