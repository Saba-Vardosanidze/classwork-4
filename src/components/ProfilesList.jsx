import Profile from "./Profile";
import styles from "./profileList.module.css";
export default function ProfilesList() {
  const profiles = [
    { id: 1, name: "Alice", age: 25, bio: "Loves coding and coffee." },
    { id: 2, name: "Bob", age: 28, bio: "Enjoys traveling and photography." },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      bio: "Passionate about gaming and music.",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      {profiles.map((profile) => (
        <Profile name={profile.name} age={profile.age} bio={profile.bio} />
      ))}
    </div>
  );
}
