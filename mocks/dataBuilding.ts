

export interface IDataBuilding {
    title: string;
    image: string;
    stage: string;
    bedrooms: number;
    garage: boolean;
    address: string;
    city: string;
    router: string;
}

export const dataBuilding: IDataBuilding[] = [
    {
        title: "Topazio",
        image: "images/residencial-topazio/new-images/frente.jpeg",
        stage: "Em Construção",
        bedrooms: 2,
        garage: true,
        address: "Rua do Topazio, 123",
        city: "Caieiras",
        router: "/residencial-topazio",
    },
    {
        title: "Safira",
        image: "images/residencial-safira/gallery/apartamento-3-4.jpg",
        stage: "Lançamento",
        bedrooms: 3,
        garage: true,
        address: "Rua da Esmeralda, 456",
        city: "Caieiras",
        router: "/residencial-safira",
    },
    {
        title: "Cristal",
        image: "images/residencial-cristal/1.png",
        stage: "Lançamento",
        bedrooms: 2,
        garage: true,
        address: "Rua do Rubí, 789",
        city: "Mauá",
        router: "/residencial-cristal",
    },
];
