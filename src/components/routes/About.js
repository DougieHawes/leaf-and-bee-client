import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="route about">
      <div className="about-column">
        <h2 className="route-title">About</h2>
        <p className="about-text">
          Leaf & Bee Gardens is run by Alethea Steven, nicknamed Leaf.
        </p>
        <p className="about-text">
          I grew up in a patch of wilderness in St. Saviour, Jersey and by
          helping my parents in their garden, this is where my love of gardens
          and gardening first sprouted.
        </p>
        <p className="about-text">
          Having worked in London for 10 years in the financial sector, a career
          change started with a Diploma in Garden Design in 2017 followed by an
          RHS Level 2: Cert in Practical Horticulture. Working as a maintenance
          gardener in South London for a few years has given me a solid
          understanding and grounding in horticulture. I returned back to Jersey
          in 2019.
        </p>
        <p className="about-text">
          I consider myself a plantswoman and I am passionate about creating
          manageable, creative, wildlife friendly spaces which perform
          throughout the seasons. Striving to work in an ethical and sustainable
          way, I will always encourage clients to find ways to save and harvest
          rainwater and incorporate a compost heap. Healthy soil reduces carbon
          emissions, retains and saves water and is best for the survival of
          your garden.
        </p>
        <p className="about-text">
          In my spare time I grow my own herbaceous perennials, making my own
          flower cutting garden and learning how to look after my father’s
          beehives.
        </p>
        <h3 className="route-title">Testmonials</h3>
        <div className="testmonial">
          <p className="testmonial-text">
            We are delighted with our garden and the whole design process that
            we went through with Leaf (Alethea). All the way from the first
            consultation to final plans, it was a streamlined and seamless
            process with plenty of flexibility to incorporate our own ideas and
            adding in her expert eye and suggestions.
            <br />
            <span className="person">Emma & Richard, Guildford</span>
          </p>
        </div>
        <div className="testmonial">
          <p className="testmonial-text">
            Whilst building our dream home from scratch we were looking for a
            garden design to complement the house and its rural surroundings.
            Alethea was so approachable and took the time to listen to our own
            ideas and to get a good understanding of our likes and dislikes. She
            then brought her expertise and experience to come up with a
            beautifully detailed planting plan that enhanced the building, its
            surroundings and our aspirations. Alethea’s in-depth knowledge and
            friendly manner made the whole process a pleasure from start to
            finish.
            <br />
            <span className="person">Nick & Helen, Hampshire</span>
          </p>
        </div>
        <div className="testmonial">
          <p className="testmonial-text">
            Alethea knows what she is doing & enjoys her job, was punctual &
            efficient. Her gardening knowledge was good & ready to learn more &
            more.
            <br />
            <span className="person">Suha, London</span>
          </p>
        </div>
      </div>
      <div className="about-column">
        <div className="about-column-image"></div>
        <div className="about-column-quote">
          Gardens are not made by singing 'Oh, how beautiful,' and sitting in
          the shade.
          <br />
          <span className="person">Rudyard Kipling</span>
        </div>
      </div>
    </div>
  );
};

export default About;
