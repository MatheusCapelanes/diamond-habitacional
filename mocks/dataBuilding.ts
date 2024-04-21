

export interface IDataBuilding {
    title: string;
    image: string;
    stage: string;
    bedrooms: number;
    garage: boolean;
    address: string;
    city: string;
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
    },
    {
        title: "Safira",
        image: "images/residencial-safira/gallery/apartamento-3-4.jpg",
        stage: "Lançamento",
        bedrooms: 2,
        garage: false,
        address: "Rua da Esmeralda, 456",
        city: "Caieiras",
    },
    // {
    //     title: "Rubí",
    //     image: "https://via.placeholder.com/400",
    //     stage: "Em Construção",
    //     bedrooms: 2,
    //     garage: true,
    //     address: "Rua do Rubí, 789"
    // },
];
