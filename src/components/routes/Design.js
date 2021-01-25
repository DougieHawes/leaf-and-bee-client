import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="route design">
      <h2 className="route-title">Design</h2>
      <div className="design-text-container">
        <p className="design-text-intro">
          It takes planning and thought to create a dream garden. An
          understanding of your aspirations, the wider context of your
          surroundings and a balance between soft and hard landscaping all come
          together in a detailed design master plan. The journey through the
          design process depends on each client but a typical approach is
          detailed below.
        </p>
        <h3 className="design-text-section-title">1. Brief</h3>
        <p className="design-text-section-body">
          It starts with a telephone conversation to talk about what you're
          looking for and to learn more about you and your garden. We'll arrange
          an Initial Consultation to meet you and see your garden. In this
          meeting I listen to your aims and what type and feel of garden you
          wish to create. At this point, we'll also talk about your budget as
          this will affect the design. After this meeting I will email you a
          written summary reiterating the design requirements and outline the
          costs to design your garden.
        </p>
        <h3 className="design-text-section-title">2. Survey</h3>
        <p className="design-text-section-body">
          If you are happy with the summary I will then arrange to come back to
          do a full survey of your garden. This takes a few hours, normally with
          two people. For larger or complex sites we can instruct a professional
          surveyor to do this. This often includes an inventory and assessment
          of existing features which can be inspiration for the final design.
        </p>
        <h3 className="design-text-section-title">3. Concept Design</h3>
        <p className="design-text-section-body">
          From your garden survey a scaled plan of your garden and a concept
          design is created. This may include hand drawn pictures to illustrate
          the vision, a photographic mood board and suggested sample materials.
          This is the time to make any changes, should you wish, before agreeing
          the next stages of the design.
        </p>
        <h3 className="design-text-section-title">4. Detailed Design</h3>
        <p className="design-text-section-body">
          This is the garden’s master plan, presented in aerial view, which
          details the structure of the garden, the materials to be used and key
          structural planting. Elevation and perspective drawings may be
          included.
        </p>
        <h3 className="design-text-section-title">5. Planting Plan</h3>
        <p className="design-text-section-body">
          Once the structure of the garden has been agreed in the detailed
          design a planting plan is created listing every type of plant and its
          location. This takes into account, soil type, aspect, flowering
          season, maintenance requirements and aesthetics.
        </p>
        <h3 className="design-text-section-title">
          6. Construction Specification
        </h3>
        <p className="design-text-section-body">
          I will prepare a full construction specification, along with any
          additional drawings that may be required, to ensure your chosen
          contractor can create your desired garden. I also provide a project
          management service, with site visits, to liaise with your contractor
          on your behalf. Once the garden is completed we can come back to plant
          your garden.
        </p>
      </div>
    </div>
  );
};

export default Design;
