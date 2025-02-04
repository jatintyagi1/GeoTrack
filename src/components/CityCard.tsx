import React from 'react';
import { Popup } from 'react-leaflet';
import { Location } from '../types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface CityCardProps {
  location: Location;
}

const CityCard: React.FC<CityCardProps> = ({ location }) => {
  return (
    <Popup>
      {location.imageUrls && location.imageUrls.length > 0 && (
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {location.imageUrls.map((url) => (
                <CarouselItem key={url} className="w-full max-h-[150px]">
                  <img
                    src={url}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 transform-none" />
            <CarouselNext className="absolute top-1/2 right-4 transform-none" />
          </Carousel>
        </div>
      )}
      <div className="font-serif">
        <h3 className="text-lg font-bold">{location.name}</h3>
        <p className="text-base">{location.description}</p>
        <a
          className="text-center"
          href={location.moreInfoUrl}
          target="_blank"
          rel="noopener noreferrer">
          More Info
        </a>
      </div>
    </Popup>
  );
};

export default React.memo(CityCard);
