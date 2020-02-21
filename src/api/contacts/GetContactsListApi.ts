import axios, { AxiosResponse } from 'axios';
import { ContactDto } from '../../types/Contact';

export const GetContactsListApi = (): Promise<AxiosResponse<
  Partial<ContactDto>[]
>> =>
  axios.get(
    'http://private-05627-frontendnewhire.apiary-mock.com/contact_list'
  );
