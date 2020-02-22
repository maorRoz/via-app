import { DriverType } from './DriverType';

export type ContactDto = {
  name: string;
  driverType: string;
  driverRank: string | number;
  phone: string;
  email: string;
  profile_image: string;
};

export type DriverRank = 0 | 1 | 2 | 3 | 4 | 5;
export const MAX_DRIVER_RANK: DriverRank = 5;

export type Contact = Pick<ContactDto, 'name' | 'phone' | 'email'> & {
  driverType: DriverType;
  driverRank: DriverRank;
  image: ContactDto['profile_image'];
};
