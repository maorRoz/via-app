import { ContactDto, Contact } from '../types/Contact';
import { DriverType } from '../types/DriverType';

const getDriverType = (driverType: string): DriverType => {
  const normalizedDriverType = driverType.toLowerCase();

  return normalizedDriverType.includes('professional')
    ? DriverType.Professional
    : DriverType.Citizen;
};

export const parseContact = (contacts: Partial<ContactDto>[]): Contact[] =>
  contacts.map(
    ({
      name = 'Unknown',
      driverType = '',
      driverRank = 'unknown',
      phone = 'unknown',
      email = 'unknown',
      profile_image: image = ''
    }) => ({
      name,
      driverType: getDriverType(driverType),
      driverRank: driverRank?.toString(),
      phone,
      email,
      image
    })
  );
