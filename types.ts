export type CatImage = {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: Breed[];
};

export type Breed = {
    id: string;
    name: string;
    description?: string;
    temperament?: string;
    origin?: string;
    [key: string]: unknown;
};

