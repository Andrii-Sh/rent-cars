import CarCard from 'components/CarCard/CarCard';

const CarsList = ({ adverts }) => {
  if (!adverts) {
    return 'Loading...';
  }
  const advertsArray = adverts;
  //   console.log(advertsArray);
  return (
    // <div>List</div>
    <ul>
      {advertsArray.map(item => {
        // const {
        //   img,
        //   make,
        //   model,
        //   year,
        //   rentalPrice,
        //   address,
        //   rentalCompany,
        //   type,
        //   id,
        //   functionalities,
        // } = item;
        return <CarCard key={item.id} advert={item} />;
      })}
    </ul>
  );
};

export default CarsList;
