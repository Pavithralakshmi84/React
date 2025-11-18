const Karnataka = () => {
  return (
    <div
      id="karnataka"
      
    >
      <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "6px" }}>
        About Karnataka
      </h3>

      <section style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>Overview</h3>
        <p style={{ lineHeight: "1.6" }}>
          Karnataka is a state in the southwestern region of India, formed on 
          November 1, 1956, originally known as Mysore State and renamed Karnataka 
          in 1973. It is bordered by Goa, Maharashtra, Telangana, Andhra Pradesh, 
          Tamil Nadu, and Kerala, and has a coastline along the Arabian Sea.
        </p>
      </section>

      <section style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>Geography and Demographics</h3>
        <p style={{ lineHeight: "1.6" }}>
          Karnataka covers an area of 191,791 sq km, making it the 7th largest Indian 
          state by area. It has a coastline of about 320 km. With over 61 million 
          residents, it is the 8th most populous state. The capital and largest city 
          is Bengaluru.
        </p>
        <p style={{ lineHeight: "1.6" }}>
          The state consists of 31 districts divided into four revenue divisions: Bengaluru, 
          Mysuru, Belagavi, and Kalaburagi. Kannada is the official language.
        </p>
      </section>

      <section style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>Cultural and Economic Highlights</h3>
        <p style={{ lineHeight: "1.6" }}>
          Karnataka boasts a rich cultural heritage including classical arts, historic temples,
          and festivals. It is an important IT and industrial hub, especially Bengaluru, known 
          as the Silicon Valley of India. The state has diverse landscapes from the Western 
          Ghats to coastal plains.
        </p>
      </section>

      <Cinema />
      <Traditional />
    </div>
  );
};

export const Cinema = () => {
  return (
    <section style={{ marginTop: "20px" }}>
      <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "6px" }}>
        Karnataka Cinema (Kannada Film Industry)
      </h3>
      <p>
        <strong>Kannada cinema</strong>, also called <em>Sandalwood</em>, is based in Bengaluru, Karnataka.
      </p>
      <p>The industry produces over 200 films annually, reflecting Karnataka's rich culture and language.</p>
      <p>Notable films include <em>Kantara</em> and <em>K.G.F.</em> series, which highlight unique local traditions and have wide appeal.</p>
      <p>Karnataka government supports the industry with subsidies and promotion.</p>
      <p>Famous actors: Rajkumar, Vishnuvardhan, Yash, Rakshit Shetty.</p>
      <LoveStory />
      <ActionStory />
      <Mostwatchedmovies />
    </section>
  );
};

export const LoveStory = () => (
  <section style={{ marginTop: "15px" }}>
    <h3 style={{ color: "#2c3e50" }}>Popular Kannada Love Story Films</h3>
    <ul style={{ paddingLeft: "20px" }}>
      <li style={{ marginBottom: "8px" }}>
        <strong>Mungaru Male</strong> - A cult romantic film known for its breathtaking visuals and timeless music.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Amruthadhare</strong> - A beautiful tale of a couple overcoming life's struggles.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Premaloka</strong> - The Kannada answer to West Side Story with memorable songs and love story.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Bandhana</strong> - Depicts unconditional and eternal love, remembered for its timeless appeal.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Dia</strong> - A bittersweet romantic drama about love, loss, and misunderstandings.
      </li>
    </ul>
  </section>
);

export const ActionStory = () => (
  <div
    style={{
      marginTop: "20px",
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 0 6px rgba(0,0,0,0.1)",
    }}
  >
    <h3 style={{ color: "#2c3e50" }}>Karnataka Cinema Action Stories</h3>
    <p>
      Karnataka's Kannada film industry produces gripping action movies known for their intense plots and heroic characters.
    </p>

    <h3>Popular Kannada Action Films</h3>
    <ul style={{ paddingLeft: "20px" }}>
      <li style={{ marginBottom: "8px" }}>
        <strong>Kantara: A Legend - Chapter 1</strong> - A tale of warrior spirit and local legend combining folklore and action.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Ghost</strong> - A thriller with high-octane action and suspense.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Gurudev Hoysala</strong> - Features dramatic action and heroic challenges.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Baang</strong> - A race against time involving deadly gangsters and thrilling sequences.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Tiger Nagehwara Rao</strong> - An action-packed biopic with vengeance and raw power.
      </li>
    </ul>
  </div>
);

export const Mostwatchedmovies = () => (
  <div
    style={{
      marginTop: "20px",
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 0 6px rgba(0,0,0,0.1)",
    }}
  >
    <h3>Most Watched Kannada Movies</h3>
    <p>
      The Karnataka film industry, known as Sandalwood, has produced some of the highest-grossing and most watched films in recent years.
    </p>

    <h3>Top Kannada Movies by Popularity and Box Office</h3>
    <ul style={{ paddingLeft: "20px" }}>
      <li style={{ marginBottom: "8px" }}>
        <strong>KGF: Chapter 2</strong> (2022) - The highest grossing Kannada film, a pan-India action blockbuster.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Kantara</strong> (2022) - A cultural thriller rooted in Karnataka's traditions.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>KGF: Chapter 1</strong> (2018) - The foundation of the KGF franchise, widely acclaimed.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Vikrant Rona</strong> (2022) - A fantasy action thriller with a star-studded cast.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>777 Charlie</strong> (2022) - A heartwarming adventure-drama about a man's bond with a dog.
      </li>
      <li style={{ marginBottom: "8px" }}>
        <strong>Raajakumara</strong> (2017) - A blend of action and family drama that resonated widely with audiences.
      </li>
    </ul>

    <p>
      These films represent the commercial and critical successes that have expanded Kannada cinema’s reach nationally and internationally.
    </p>
  </div>
);

export const Traditional = () => (
  <section style={{ marginTop: "20px" }}>
    <h2 style={{ borderBottom: "2px solid #ccc", paddingBottom: "6px" }}>Karnataka Culture</h2>

    <p>Karnataka is known for its rich cultural heritage, with a diverse mix of languages, arts, music, dance, festivals, and cuisine.</p>

    <h2 style={{ color: "#2c3e50" }}>Languages and Traditions</h2>
    <p>Kannada is the main language. Other languages include Tulu, Konkani, and Kodava, reflecting the state's cultural diversity.</p>

    <h2 style={{ color: "#2c3e50" }}>Performing Arts</h2>
    <p>
      Traditional art forms include Yakshagana (dance-drama), Dollu Kunitha (drum dance),
      and other folk dances like Suggi Kunitha and Pata Kunitha.
    </p>

    <h2 style={{ color: "#2c3e50" }}>Festivals</h2>
    <ul style={{ paddingLeft: "20px" }}>
      <li>Mysore Dasara</li>
      <li>Ugadi (Kannada New Year)</li>
      <li>Makar Sankranti</li>
      <li>Vairamudi Festival</li>
    </ul>

    <h2 style={{ color: "#2c3e50" }}>Traditional Attire</h2>
    <p>
      Men wear Panche, kurtas, and Mysore Peta (turban). Women wear Mysore silk sarees and Ilkal saris.
    </p>

    <h2 style={{ color: "#2c3e50" }}>Cuisine</h2>
    <p>Popular dishes include Bisi Bele Bath, Neer Dosa, Kori Gassi, and Dharwad Peda.</p>

    <h2 style={{ color: "#2c3e50" }}>Handicrafts and Architecture</h2>
    <p>Famous for Mysore paintings, Channapatna toys, and historic temples from Hoysala and Vijayanagara periods.</p>
  </section>
);

export default Karnataka;
