import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputSection() {
  const [memes, setMemes] = useState([]);

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
      <select>
        {memes.map((meme) => (
          <option value={meme.key}>{meme.name}</option>
        ))}
      </select>
    </div>
  );
}

// function getImg(arr) {
//   let elementArr = [];
//   for (let element of arr) {
//     if (element.match('<img[^>]+src\\s*=\\s*[\'"]([^\'"]+)[\'"][^>]*>')) {
//       elementArr.push(element.split('"')[1]);
//     }
//   }
//   elementArr.length = 10;
//   return elementArr;
// }
