import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../Header';
import { ContactsList } from '../../ContactsList';
import { Body } from './ContactsListPage.styled';
import {
  fetchContactsList,
  isFetchContactsFailedSelector
} from '../../../redux';

export const ContactsListPage = () => {
  const isFetchContactsFailed = useSelector(isFetchContactsFailedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsList);
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Body>
        {isFetchContactsFailed ? (
          <div>An error has occured while fetching contacts list...</div>
        ) : (
          <ContactsList />
        )}
      </Body>
    </div>
  );
};
