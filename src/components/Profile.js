import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "../blocks/ItemCard.css";
import "../blocks/Profile.css";

const Profile = ({
  items,
  openModal,
  onSelectCard,
  onSignout,
  currentUser,
  openSideEditModal,
  isLoggedIn,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar
          onSignout={onSignout}
          openModal={openSideEditModal}
          currentUser={currentUser}
        />
      </div>
      <div className="profile__clothes-section">
        <ClothesSection
          openModal={openModal}
          items={items}
          onSelectCard={onSelectCard}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
};
export default Profile;
