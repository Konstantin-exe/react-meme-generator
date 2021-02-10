import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

export default function InputSection(props) {
  const [memes, setMemes] = useState([]);
  const [img, setImg] = useState('aag');
  const [top, setTop] = useState('create_your');
  const [bot, setBot] = useState('own_meme');

  const memeImg = `https://api.memegen.link/images/${img}/${top}/${bot}`;

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
      <img src={memeImg} alt={memeImg.name} />
      <select
        id="selectImg"
        onChange={(event) => {
          const imgSelect = document.getElementById('selectImg');
          const selectedValue = imgSelect.value;
          setImg(selectedValue);
          // console.log(memeImg);
        }}
      >
        {memes.map((meme) => (
          <option key={meme.id} value={meme.id}>
            {meme.name}
          </option>
        ))}
      </select>

      <label className="form_label" htmlFor="selectTop">
        TOP TEXT
      </label>
      <input
        id="selectTop"
        onChange={(event) => {
          const topSelect = document.getElementById('selectTop');
          const selectedTop = topSelect.value.replaceAll(' ', '_');
          setTop(selectedTop);
        }}
      />

      <label className="form_label" htmlFor="selectBot">
        BOTTOM TEXT
      </label>
      <input
        id="selectBot"
        onChange={(event) => {
          const botSelect = document.getElementById('selectBot');
          const selectedBot = botSelect.value.replaceAll(' ', '_');
          setBot(selectedBot);
        }}
      />

      <br />
      <Button memeImg={memeImg} />
    </div>
  );
}
