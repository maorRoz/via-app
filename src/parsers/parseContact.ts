import {
  ContactDto,
  Contact,
  DriverRank,
  MAX_DRIVER_RANK
} from '../types/Contact';
import { DriverType } from '../types/DriverType';

const getDriverType = (driverType: string): DriverType => {
  const normalizedDriverType = driverType.toLowerCase();

  return normalizedDriverType.includes('professional')
    ? DriverType.Professional
    : DriverType.Citizen;
};

const getDriverRank = (driverRank: string | number): DriverRank => {
  const numberDriverRank = Number(driverRank) || 0;
  const notNegativeDriverRank = numberDriverRank >= 0 ? numberDriverRank : 0;
  return notNegativeDriverRank <= MAX_DRIVER_RANK
    ? (notNegativeDriverRank as DriverRank)
    : MAX_DRIVER_RANK;
};

export const parseContact = (contacts: Partial<ContactDto>[]): Contact[] =>
  contacts.map(
    ({
      name = 'Unknown',
      driverType = '',
      driverRank = 0,
      phone = 'unknown',
      email = 'unknown',
      profile_image: image = ''
    }) => ({
      name,
      driverType: getDriverType(driverType),
      driverRank: getDriverRank(driverRank),
      phone,
      email,
      image
    })
  );
