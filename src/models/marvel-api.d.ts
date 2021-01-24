export default interface MarvelResponse {
  code: number;
  data: {
    count: number;
    limit: number;
    offset: number;
    results: Hero[];
    total: number;
  };
  status: string;
}

export interface Hero {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  extension: string;
  path: string;
}
