import { DriverType } from './DriverType';

export type ContactDto = {
  name: string;
  driverType: string;
  driverRank: string | number;
  phone: string;
  email: string;
  profile_image: string;
};

export type Contact = Pick<ContactDto, 'name' | 'phone' | 'email'> & {
  driverType: DriverType;
  driverRank: string;
  image: ContactDto['profile_image'];
};
