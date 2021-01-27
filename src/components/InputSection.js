import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputSection() {
  const [memes, setMemes] = useState(['Ancient Alien Guy']);
  // const [top, setTop] = useState('');

  useEffect(() => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((res) => {
        console.log(res);
        setMemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <select
        onChange={(event) => {
          setMemes(event.currentTarget.value);
        }}
        value={memes.key}
      >
        {memes.map((meme) => (
          <option
            onChange={(event) => {
              setMemes(event.currentTarget.value);
            }}
            value={memes}
          >
            {meme.name}
          </option>
        ))}
      </select>
    </div>
  );
}
