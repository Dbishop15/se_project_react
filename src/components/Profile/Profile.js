import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import ItemCard from "../ItemCard/ItemCard";
import "../ItemCard/ItemCard.css";
import "./Profile.css";

const Profile = ({ items, openModal, onSelectCard }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes-section">
        <ClothesSection openModal={openModal} />
        <div className="card__items">
          {items.map((item) => (
            <ItemCard
              key={item._id || item.id}
              item={item}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
