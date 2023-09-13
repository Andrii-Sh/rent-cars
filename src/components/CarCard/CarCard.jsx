const CarCard = ({ adverts }) => {
  return (
    <li>
      <img src={adverts.img} alt="" />
      <div>
        <p>{`${adverts.make} ${adverts.model}, ${adverts.year}`}</p>
        <p>{adverts.rentalPrice}</p>
      </div>
      <div>
        <p>Kiev</p>
        <p>Ukraine</p>
        <p>{adverts.rentalCompany}</p>
        <p>Premium</p>
        <p>{adverts.type}</p>
        <p>{adverts.model}</p>
        <p>{adverts.id}</p>
        <p>{adverts.functionalities[0]}</p>
      </div>
    </li>
  );
};

export default CarCard;
