import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guaranteen"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more" />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Lern more"
      />
      <Section
      title = "Accessories"
      description =""
      backgroundImage="accessories.jpg"
      leftButtonText="Shop now"
      rightButtonText=""/>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;

export default Home;
