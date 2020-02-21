import React from 'react';
import {
  CardHeaderLayout,
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
    <CardImage src={image} alt="" />
    <CardIconLayout>
      {professional ? <ProfessionalDriverIcon /> : <CitizenDriverIcon />}
    </CardIconLayout>
  </CardHeaderLayout>
);
