import { useState } from 'react';
import './App.css';
import Film from './components/film/Film';
import Modal from './components/modal/Modal';
import { useEndpoint } from './hooks/useEndpoint';

function App() {
  const [film, setFilm] = useState<any>({});
  const [modal, setModal] = useState<boolean>(false);
  const filmsUrl = 'https://swapi.dev/api/films/';
  const films = useEndpoint(filmsUrl);

  const getFilmInfo = (e: any) => {
    console.log(e);
    setModal(!modal);
    films.forEach((el: any) => {
      if (el.title === e) {
        setFilm(el);
      }
    });
  };

  return (
    <div className="app">
      <h1>Films</h1>
      <div className="films">
        {films.map((el: any, ind: number) => (
          <Film key={ind} title={el.title} getFilmInfo={getFilmInfo} />
        ))}
      </div>
      {modal && (
        <Modal
          title={film.title}
          opening_crawl={film.opening_crawl}
          release_date={film.release_date}
          director={film.director}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default App;
