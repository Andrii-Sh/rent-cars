import sass from './CarCard.module.scss';

const CarCard = ({ advert }) => {
  //   console.log(advert);
  return (
    <li>
      <div className={sass.imgWrapper}>
        <img className={sass.img} src={advert.img} alt="" />
      </div>
      <div>
        <p>{`${advert.make} ${advert.model}, ${advert.year}`}</p>
        <p>{advert.rentalPrice}</p>
      </div>
      <div>
        <p>Kiev</p>
        <p>Ukraine</p>
        <p>{advert.rentalCompany}</p>
        <p>Premium</p>
        <p>{advert.type}</p>
        <p>{advert.model}</p>
        <p>{advert.id}</p>
        <p>Power liftgate</p>
      </div>
      <button>Learn more</button>
    </li>
  );
};

export default CarCard;
