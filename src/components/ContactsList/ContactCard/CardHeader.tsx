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

export const CardHeader = ({ image, professional }: CardHeaderProps) => (
  <CardHeaderLayout>
    <CardImageLayout>
      <CardImage src={image} alt="" />
    </CardImageLayout>
    <CardIconLayout>
      {professional ? <ProfessionalDriverIcon /> : <CitizenDriverIcon />}
    </CardIconLayout>
  </CardHeaderLayout>
);
