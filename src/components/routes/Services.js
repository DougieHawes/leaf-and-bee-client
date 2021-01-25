import { useState } from "react";

import { Link } from "react-router-dom";

import gardenImage1 from "../../media/gardenImage1.jpg";
import gardenImage2 from "../../media/gardenImage2.jpg";

const Services = () => {
  const [state, setState] = useState({
    layout1: false,
  });

  const Option1 = () => {
    return (
      <div className="services-body option1">
        <div className="services-text">
          <p className="services-text-line">
            I am here to help you get the most enjoyment out of your garden.
          </p>
          <p className="services-text-line">
            Perhaps you want to redesign your entire garden or an existing
            border.
          </p>
          <p className="services-text-line">
            Need some advice on what plants would suit and work in your garden
            and require a detailed planting scheme. Would like to know how to
            care for your existing plants in your garden and would like a garden
            care package. Need a hand with some ad hoc gardening maintenance
            jobs or seasonal requirements.
          </p>
          <p className="services-text-line">
            Would like some 1-2-1 garden coaching on how to grow your own
            perennials, take cuttings or grow vegetables but don’t know where to
            start.
          </p>
          <p className="services-text-line">
            Would like help setting up a pollinator and wildlife friendly haven.
          </p>
          <p className="services-text-line">
            I offer different packages depending on your needs so please contact
            Leaf, Tel 854170 or email xxxxx
          </p>
        </div>
        <div className="services-footer">
          <div className="services-images">
            <div className="services-image">
              <img src={gardenImage1} alt="" />
            </div>
            <div className="services-image">
              <img src={gardenImage2} alt="" />
            </div>
          </div>
          <div className="services-quote">
            <p className="services-quote-text">
              If you wish to make anything grow, you must understand it, and
              understand it in a very real sense. 'Green fingers' are a fact,
              and a mystery only to the unpractised. But green fingers are the
              extensions of a verdant heart.
            </p>
            <p className="services-quote-person">Russell Page</p>
          </div>
        </div>
      </div>
    );
  };

  const Option2 = () => {
    return (
      <div className="services-body option2">
        <div className="services-grid">
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">Garden Design</h3>
            <p className="services-grid-section-text">
              Maecenas feugiat tellus bibendum ligula mollis, eget auctor ante
              bibendum. Nullam aliquet porttitor arcu, id pellentesque nulla
              ornare sed. Aliquam erat volutpat. Suspendisse blandit euismod est
              cursus aliquet. Fusce consectetur a sapien et sodales. Praesent ut
              lorem eu massa aliquam pellentesque non vel est. Praesent tempor
              quis erat non ullamcorper. Donec hendrerit posuere velit, eu
              pellentesque ipsum iaculis quis.
            </p>
          </div>
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">New Garden</h3>
            <p className="services-grid-section-text">
              Vivamus et nisl tempor, porttitor urna et, aliquam ex. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Duis vel eleifend purus. Duis mi lectus, blandit at
              neque quis, finibus consequat odio. Phasellus non massa vel massa
              accumsan dictum. Quisque euismod sodales ipsum. Vestibulum et
              tellus orci. Nam non felis odio. Integer pharetra lectus sit amet
              massa faucibus fringilla.
            </p>
          </div>
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">Unloved Gardens</h3>
            <p className="services-grid-section-text">
              Vestibulum aliquet tempus eros sit amet pellentesque. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Pellentesque id accumsan nisl. Vivamus vulputate
              diam ut nunc imperdiet, sit amet maximus turpis iaculis. Ut vitae
              fermentum massa. Vivamus pulvinar, augue non tempus sodales, magna
              diam pharetra turpis, cursus accumsan sapien sem non est.
            </p>
          </div>
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">
              Border Design + Planting Design
            </h3>
            <p className="services-grid-section-text">
              Nulla facilisi. Etiam finibus vitae erat a venenatis. Phasellus
              ultrices, libero id finibus vestibulum, libero lorem tristique
              tellus, eu congue ipsum lectus in dui. Aenean et nisi nec nisl
              posuere ultrices eget eget nulla. Proin lacinia eros elit. Aenean
              lacus mi, porta a diam vel, tincidunt luctus orci. Praesent
              varius, ex quis dapibus suscipit, urna quam malesuada magna, vitae
              maximus sapien nisl nec purus.
            </p>
          </div>
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">Maintenance</h3>
            <p className="services-grid-section-text">
              Ut aliquam, urna vel euismod commodo, felis mauris lacinia lectus,
              in rhoncus risus mi at orci. Suspendisse consequat porttitor leo,
              in porttitor dolor tempor nec. Suspendisse iaculis nec arcu ac
              mattis. Sed nibh ante, pulvinar quis est ut, pretium venenatis
              magna. Quisque volutpat elementum elit, id semper orci eleifend
              eget.
            </p>
          </div>
          <div className="services-grid-section">
            <h3 className="services-grid-section-title">
              Gardening Buddy 1-2-1
            </h3>
            <p className="services-grid-section-text">
              Nullam elementum neque vitae nunc iaculis ultrices. Mauris
              molestie tempus pulvinar. Nulla commodo nibh purus. Nullam sed
              sagittis augue, in ornare justo. Morbi tristique tristique tortor,
              id dignissim dolor auctor finibus. Integer quam enim, tincidunt
              vitae rutrum quis, fringilla vitae ante. Nam feugiat ligula orci,
              fermentum ornare enim pharetra eu.
            </p>
          </div>
          <div className="services-grid-section">
            <img src={gardenImage1} alt="" />
          </div>
          <div className="services-grid-section">
            <img src={gardenImage2} alt="" />
          </div>
          <div className="services-grid-section">
            <p className="services-quote-text">
              If you wish to make anything grow, you must understand it, and
              understand it in a very real sense. 'Green fingers' are a fact,
              and a mystery only to the unpractised. But green fingers are the
              extensions of a verdant heart.
            </p>
            <p className="services-quote-person">Russell Page</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="route services">
      <h2 className="route-title">Services</h2>
      <p
        onClick={() => setState({ layout1: !state.layout1 })}
        style={{ margin: "12px 0" }}
      >
        ***toggle layout***
      </p>
      {state.layout1 ? <Option1 /> : <Option2 />}
    </div>
  );
};

export default Services;
