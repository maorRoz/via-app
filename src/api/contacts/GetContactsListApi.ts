import axios, { AxiosResponse } from 'axios';

export const GetContactsListApi = (): Promise<AxiosResponse> =>
  axios.get(
    'http://private-05627-frontendnewhire.apiary-mock.com/contact_list'
  );
