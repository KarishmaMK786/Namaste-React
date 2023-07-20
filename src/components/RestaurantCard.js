const RestaurantCard  = (props) => { 
    const {res} = props;

    // const {name,cusines} = res?.data;  we can write here line number 11 (res.data.name) == > name

    return (
       <div className='res-card'>
          <img className='res-logo'
          alt="res-logo"
           src={res.image} />                        
          <h3>{res.name}</h3>
          <h5>{res.cusines.join(", ")}</h5>
          <h4>✭ {res.rating}</h4>
          <h6>{res.delivery}</h6>
 
       </div>
    )
 }

 export default RestaurantCard;