import CarCard from 'components/CarCard/CarCard';

const CarsList = ({ adverts }) => {
  return (
    <ul>
      <CarCard adverts={adverts} />
    </ul>
  );
};

export default CarsList;
