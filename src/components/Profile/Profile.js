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
          {items.map((card) => (
            <ItemCard
              key={card?._id || card?.id}
              item={card}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </div>
    </div>
    // <div className="card__items">
    //     {cards.map((card) => (
    //       <ItemCard
    //         key={card?._id || card?.id}
    //         item={card}
    //         onSelectCard={onCardClick}
    //       />
    //     ))}
    //   </div>
    // <div className="profile">
    //   <div className="profile__sidebar">
    //     <SideBar />
    //   </div>
    //   <div className="profile__clothes-section">
    //     <ClothesSection
    //       card={items}
    //       openModal={openModal}
    //       onCardClick={handleCardClick}
    //     />
    //     <div className="card__items">
    //       {items.map((card) => (
    //         <ItemCard key={card.id} item={card} onSelectCard={onSelectCard} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Profile;
