import CarsList from 'components/CarsList/CarsList';
import Search from 'components/Search/Search';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
// import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
// import { Container } from 'components/Shared/Container.styled';
import React, { useEffect, useState } from 'react';

import { getAllAdverts, getAdvertsByLimit } from '../api/advertsApi';

const CatalogPage = () => {
  const [totalAdverts, setTotalAdverts] = useState('');
  const [currentAdverts, setCurrentAdverts] = useState('');

  async function fetchAllAdverts() {
    try {
      const data = await getAllAdverts();
      setTotalAdverts(data.length);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAdvertsByLimit() {
    try {
      const data = await getAdvertsByLimit(8);
      setCurrentAdverts(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllAdverts();
    fetchAdvertsByLimit();
  }, []);

  return (
    <>
      <Search />
      <CarsList adverts={currentAdverts} />
      <LoadMoreBtn />
    </>
    // <div>CatalogPage</div>
    // <CatalogSection>
    //   <Container>
    //     <CarsList />
    //   </Container>
    // </CatalogSection>
  );
};

export default CatalogPage;
