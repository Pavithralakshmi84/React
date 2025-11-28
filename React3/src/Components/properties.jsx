import Props from "./child.jsx";

const Properties = () => {
  const data = "Props Example";

  return (
    <>
      <Props senddata={data} />
    </>
  );
};

export default Properties;  