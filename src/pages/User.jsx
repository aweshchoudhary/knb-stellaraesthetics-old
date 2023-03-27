import { useSelector } from "react-redux";

const User = () => {
  const profile = useSelector((state) => state.auth.user.profile);
  console.log(profile);
  return profile ? (
    <section className="flex p-5 gap-3">
      <div className="shrink-0">
        <img
          src={profile.picture}
          className="w-[100px] h-[100px] rounded-full object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl">{profile.name || profile.nickname}</h1>
        <p>{profile.email}</p>
      </div>
    </section>
  ) : (
    <p>Loading...</p>
  );
};

export default User;
