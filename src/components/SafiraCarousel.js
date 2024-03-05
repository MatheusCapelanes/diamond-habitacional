
import Image from "next/image";
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "/images/residencial-safira/gallery/apartamento-de-frente.jpg",
    key: 1,
    caption: "Apartamento de Frente - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/apartamento-3-4-visao-intermediaria.jpg",
    key: 2,
    caption: "Vista Externa de Apartamento 3/4 - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/apartamento-3-4.jpg",
    key: 3,
    caption: "Apartamento 3 Quartos - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/apartamento-frontal-proxima.jpg",
    key: 4,
    caption: "Fachada Frontal do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/apartamento-visao-de-baixo.jpg",
    key: 5,
    caption: "Vista de Baixo do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/apartamento-visao-de-cima-intermediaria.jpg",
    key: 6,
    caption: "Vista de Cima do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/corredores-do-apartamento.jpg",
    key: 7,
    caption: "Corredores Internos do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/estruturas-da-parte-inferior-do-apartamento.jpg",
    key: 8,
    caption: "Estruturas da Parte Inferior do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/portao-do-apartamento.jpg",
    key: 9,
    caption: "Portão de Acesso ao Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/terraco-do-apartamento.jpg",
    key: 10,
    caption: "Terraço do Apartamento - Residencial Safira"
  },
  {
    src: "/images/residencial-safira/gallery/visao-de-cima-do-apartamento.jpg",
    key: 11,
    caption: "Vista de Cima do Apartamento - Residencial Safira"
  },
];

export default function SafiraCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="rounded-lg"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image className="rounded-lg h-[320px]" src={item.src} alt={item.altText} width={600} height={320} style={{
          objectFit: "cover"
        }} />
        <CarouselCaption
          captionText={item.caption}
          style={{
            display: "none"
          }}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="rounded-lg h-[320px]"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={2500}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
