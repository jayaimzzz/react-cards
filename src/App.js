import React from "react";

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = props => <div className="cardGroup">{props.children}</div>;

const Card = props => (
  <div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
      <div className={props.icon} />
      <div className="card__descriptionText">
        {props.description}
        <br></br>
        {props.hint}
      </div>
    </div>
    <div className="card__price">{props.price}</div>
  </div>
);

const App = () => (
  <CardGroup>
    <Card
      description="Trial"
      price="Free!"
      icon="icon fa fa-thumbs-o-up card__descriptionIcon"
    />
    <Card
      description="Basic tier"
      hint="(most popular)"
      price="$10.00"
      icon="icon fa fa-trophy card__descriptionIcon"
    />
    <Card
      description="Advanced tier"
      hint="(only for enterprise-level professionals)"
      price="$6,000.00"
      icon="icon fa fa-bolt card__descriptionIcon"
    />
    
  </CardGroup>
);

export default App;
