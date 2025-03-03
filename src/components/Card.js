export default function Card({ image, heading, price, desc }) {
  return (
    <article className="card">
      <img src={image} alt="" />
      <div className="card-details">
        <div className="card-heading">
          <h3>{heading}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p>{desc}</p>
        <div className="card-bottom">Order now</div>
      </div>
    </article>
  );
}
