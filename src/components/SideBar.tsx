import { useState, useEffect, useContext } from "react";
import { GenreId } from "../Context";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { Icon } from './Icon';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family' | 'toggle';
  title: string;
}

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const { selectedGenreId, setSelectedGenreId } = useContext(GenreId);
  const [isVisibleMobile, setIsVisibleMobile] = useState(true);
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
      <div className="sidebarMobile">
        <span
          onClick={() => setIsVisibleMobile(toggle => !toggle)}
        >
          {<Icon name="toggle" color="#FAE800" />}
        </span>
        <span>Watch<p>Me</p></span>
      </div>
      {isVisibleMobile && (
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      )}

    </nav>
  );
}