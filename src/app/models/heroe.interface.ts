export interface Heroe {
  name: string;
  image: string;
  thumbnail: { path: string; extension: string };
  description: string;
}

export interface magazine {
  title: string;
  thumbnail: { path: string; extension: string };
  characters: { items: string[] };
}
