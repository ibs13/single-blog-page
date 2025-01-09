import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="profile picture" width="40" height="auto" />
    </div>
  );
};

export default Header;
