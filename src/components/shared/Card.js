const Card = (props) => (
  <div className="card bg-dark text-light mb-3">
    <div className="card-body">{props.children}</div>
  </div>
);

export default Card;
