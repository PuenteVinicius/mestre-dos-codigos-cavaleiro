export default interface MarvelResponse {
  code: number;
  data: {
    count: number;
    limit: number;
    offset: number;
    results: Heroes[];
    total: number;
  };
  status: string;
}

export interface Heroes {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  extension: string;
  path: string;
}
