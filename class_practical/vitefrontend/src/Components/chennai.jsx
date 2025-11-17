const Chennai = () => {
  return (
     <>
    <div>
      <Navbar />
      <ITcompanies />
      <ChennaiRobotics/>
    </div>
     </>
  );
};


export const Navbar = () => {
    return(
        <div>

            <h1>Highlights of Chennai</h1>

  <section>
    <h2>Marina Beach</h2>
    <p>Marina Beach is the second longest urban beach in the world and a major tourist attraction in Chennai, offering stunning sunrise views and a vibrant promenade.</p>
  </section>

  <section>
    <h2>Kapaleeshwarar Temple</h2>
    <p>This iconic Dravidian style Hindu temple dedicated to Lord Shiva features exquisite architecture and is a cultural hub in Chennai.</p>
  </section>

  <section>
    <h2>Fort St. George</h2>
    <p>Built by the British in 1640, Fort St. George is the first English fortress in India and now houses several government offices and a museum.</p>
  </section>

  <section>
    <h2>Guindy National Park</h2>
    <p>One of the few national parks located inside a city, Guindy National Park is a green oasis home to diverse wildlife species.</p>
  </section>

  <section>
    <h2>Valluvar Kottam</h2>
    <p>Valluvar Kottam is a monument dedicated to the classical Tamil poet Thiruvalluvar, with impressive stone chariot architecture symbolizing Tamil heritage.</p>
  </section>

  <section>
    <h2>Chennai's Cultural Scene</h2>
    <p>Chennai is a vibrant cultural hub with classical music and dance festivals, thriving art galleries, and historic architecture reflective of Tamil Nadu's rich heritage.</p>
  </section></div>);
  };
        
    


export const ChennaiRobotics = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Robotics in Chennai</h1>
      <p>
        Chennai is emerging as a leading hub for robotics innovation and
        development in India. The city hosts a vibrant ecosystem of humanoid
        robot manufacturers, developers, and integration experts.
      </p>
      <p>
        Robotics technologies in Chennai are applied extensively in industrial
        automation, manufacturing, warehouse robotics, healthcare assistance,
        and smart factory solutions. Many local and international firms focus on
        AI-driven humanoid robots that deliver precision, efficiency, and human-robot collaboration.
      </p>
      <p>
        Key advances include affordable humanoid robots designed for small- and medium-sized enterprises, integration of AI for autonomous decision-making, and extensive research in human-robot interaction.
      </p>
      <p>
        Chennai also hosts specialized robotics training institutes, accelerating workforce development in this cutting-edge sector.
      </p>
      <p>
        With ongoing innovation, the future of robotics in Chennai looks promising, positioning the city as a notable global player in the robotics industry.
      </p>
    </div>
  );
};

export const ITcompanies= () => {
    return(
        <div className="container my-5">
    <h1>Top IT Companies in Chennai with Features</h1>

  <section>
    <h2>Wipro</h2>
    <p>Wipro Ltd is a multinational IT services company offering cloud computing, infrastructure management, and business process transformation services globally.</p>
  </section>

  <section>
    <h2>Tata Consultancy Services (TCS)</h2>
    <p>TCS is a global IT giant delivering consulting, software development, and digital transformation services across multiple industries including banking and healthcare.</p>
  </section>

  <section>
    <h2>Infosys</h2>
    <p>Infosys provides end-to-end IT solutions such as AI, blockchain, IoT, digital supply chain management, and Microsoft cloud business applications.</p>
  </section>

  <section>
    <h2>Cognizant</h2>
    <p>Cognizant specializes in intelligent process automation, digital engineering, cloud services, and industry/platform solutions for sectors like healthcare and finance.</p>
  </section>

  <section>
    <h2>Capgemini</h2>
    <p>Capgemini offers IT outsourcing, consulting, AI solutions, business information management, cloud, and managed services to global clients.</p>
  </section></div>);
};


export default Chennai;

