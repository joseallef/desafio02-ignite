import { useState, createContext, ReactNode } from "react";

type ProviderGenreIdProps = {
  children: ReactNode;
}
type ContextProps = {
  selectedGenreId: number;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
}

const DEFAULT_VALUE = {
  selectedGenreId: 1,
  setSelectedGenreId: () => 1,
}

export const GenreId = createContext<ContextProps>(DEFAULT_VALUE);

export function ProviderGenreId({ children }: ProviderGenreIdProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);
  return (
    <GenreId.Provider
      value={{
        selectedGenreId,
        setSelectedGenreId
      }}
    >
      {children}
    </GenreId.Provider>
  )
}