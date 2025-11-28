import Child from "./child";

const Props = ({ senddata }) => {
  const Moviename = "Alaipayuthe";
  const Hero = "Madhavan";
  const Heroine = "Shalini";
  const Songs = [
    "Pachchai Nirame",
    "Evano Oruvan Vasikiran",
    "September Madham",
    "Snehidhane Snehidhane",
  ];
  const Director = { Music: "AR Rahman", Movie: "Maniratnam" };
  const list = [{ id: 1, singer: "Srinivas", dancer: "Sophiya Haque" }];

  return (
    <>
      <h1>{senddata}</h1>
      <Child
        sendmoviename={Moviename}
        hero={Hero}
        heroine={Heroine}
        sendarray={Songs}
        sendobject={Director}
        sendlist={list}
      />
    </>
  );
};

export default Props;
