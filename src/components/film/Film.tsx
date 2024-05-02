import './Film.css';

type Props = {
  title: string;
  getFilmInfo: (e: any) => void;
};

const Film = ({ title, getFilmInfo }: Props) => {
  return (
    <div
      className="film"
      onClick={(e) => getFilmInfo((e.target as HTMLElement).textContent)}
    >
      {title}
    </div>
  );
};

export default Film;
