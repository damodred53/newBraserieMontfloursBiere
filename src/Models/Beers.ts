

export interface Beer {
    id: number;
    name: string;
    imagePath: string;
    isSoft: boolean;
}

export interface BeerDetail {
    name: string;
    translationKey?: string;
    presentation: string;
    imagePath: string;
};