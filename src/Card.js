import { memo } from "react";
import Button from "./Button";

function Card({ name, url }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src="https://svgur.com/i/ffg.svg" className="card-img" />
        <div className="card-info">
          <p className="card-title">Please help {name}</p>
          <p className="card-description">
            Your support will go a long way and will help our planet.
          </p>
        </div>
      </div>
      <Button url={url} />
    </div>
  );
}
export default memo(Card);
