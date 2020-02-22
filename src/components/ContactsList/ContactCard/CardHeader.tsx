import React from 'react';
import {
  CardHeaderLayout,
  CardImageLayout,
  CardImage,
  CardIconLayout
} from './ContactCard.styled';
import { ProfessionalDriverIcon } from './ProfessionalDriverIcon';
import { CitizenDriverIcon } from './CitizenDriverIcon';

export type CardHeaderProps = {
  image: string;
  professional?: boolean;
};

const defaultPicture =
  'https://images-na.ssl-images-amazon.com/images/G/01/author-pages/no-profile-image-placeholder-na._CB484118601_.png';

export const CardHeader = ({ image, professional }: CardHeaderProps) => (
  <CardHeaderLayout>
    <CardImageLayout>
      <CardImage src={image || defaultPicture} alt="Profile_Image" />
    </CardImageLayout>
    <CardIconLayout>
      {professional ? <ProfessionalDriverIcon /> : <CitizenDriverIcon />}
    </CardIconLayout>
  </CardHeaderLayout>
);
