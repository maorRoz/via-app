import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../Header';
import { ContactsList } from '../../ContactsList';
import { Body } from './ContactsListPage.styled';
import { fetchContactsList } from '../../../redux';

export const ContactsListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsList);
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Body>
        <ContactsList />
      </Body>
    </div>
  );
};
