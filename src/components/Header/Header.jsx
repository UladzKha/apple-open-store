import applicationIcon from "../../assets/play.png";
import avatar from "../../assets/avatar.png";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__bla">
        <img className="header__bla__icon" src={applicationIcon} alt="icon" />
        <div>Open Play Store</div>
      </div>
      <div className="header__search">
        <input
          className="header__search__input"
          type="text"
          placeholder="Search"
        />
        <button className="header__search__button" type="button">
          Search
        </button>
      </div>
      <div className="header__avatar">
        <img className="header__avatar__image" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
