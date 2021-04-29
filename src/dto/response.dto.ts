export interface ResopnseDto {
    Search: ResponseStructure[];
}

export interface ResponseStructure {
    Title: string;
    Year: string;
    imdbID: string;
    Type: 'movie' | 'series';
    Poster: string;
}
