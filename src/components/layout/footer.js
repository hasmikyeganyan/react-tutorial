const Footer = (props) => {
  return (
    <footer className="mastfoot mt-aito">
      <div className="inner">
        <p>
          Website Design and Devolpment by
          <a href="https://reactjs.org/"> React LLC</a>. | {props.date}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
