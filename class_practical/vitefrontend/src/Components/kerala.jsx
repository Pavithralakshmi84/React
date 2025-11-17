const Kerala = () => {
  return (
    <>
      <div id="kerala">
        <h1>About Kerala</h1>

        <section>
          <h2>Overview</h2>
          <p>Kerala, often called “God’s Own Country,” is a serene state in southern India known for its lush green landscapes, beautiful backwaters, and rich cultural heritage.</p>
        </section>

        <section>
          <h2>Natural Beauty</h2>
          <p>Kerala features the Western Ghats mountain range, extensive backwaters including Vembanad Lake, pristine beaches like Kovalam and Marari, tea and spice plantations in Munnar, and wildlife sanctuaries.</p>
        </section>

        <section>
          <h2>Cultural Highlights</h2>
          <p>The state is known for classical arts like Kathakali dance, traditional Ayurveda treatments, historic temples and churches, as well as festive celebrations including Onam and Vishu.</p>
        </section>

        <Tourist />
        <Festival />
      </div>
    </>
  );
};

export const Tourist = () => {
  return (
    <div>
      <h1>Top Tourist Places in Kerala</h1>
      <ul>
        <li>Munnar - Famous for tea estates and hill station beauty.</li>
        <li>Alleppey - Backwaters and houseboat cruises.</li>
        <li>Wayanad - Wildlife sanctuaries and natural beauty.</li>
        <li>Kochi - Historical sites with Portuguese and Dutch influences.</li>
        <li>Kovalam - Popular beach destination with nightlife.</li>
        <li>Vagamon - Meadows, pine forests, and adventure sports.</li>
        <li>Thekkady - Periyar Wildlife Sanctuary and spice plantations.</li>
        <li>Athirapally Waterfalls - Largest waterfall and scenic beauty.</li>
        <li>Varkala - Cliff beach and religious sites.</li>
      </ul>
    </div>
  );
};

export const Festival = () => {
  return (
    <div>
      <h1>Top 5 Festivals in Kerala</h1>
      <ul className="list-group">
        <li>
          <strong>Onam</strong> The grand harvest festival known for flower arrangements (Pookalam), boat races, and feasts.
        </li>
        <li>
          <strong>Thrissur Pooram</strong> Famous temple festival featuring spectacular elephant processions and traditional percussion music.
        </li>
        <li>
          <strong>Vishu</strong> Malayali New Year celebrated with rituals, feasts, and fireworks.
        </li>
      </ul>
    </div>
  );
};

export default Kerala;
