export type GenreName = "Classics" | "Adventure" | "Science Fiction" | "Horror" | "Thriller" | "Essays" | "Short Stories" | "Biographies";
export type GenreSlug = "classics" | "adventure" | "science fiction" | "horror" | "thriller" | "essays" | "short-stories" | "biographies";


export type Genre = {
    name: string,
    slug: string
}

export type Book = {
    id: string,
    title: string,
    description: string,
    genre: GenreName,
    genreSlug: GenreSlug,
    image: string,
}