import React from "react";

import MotionCard from "../Animation/MotionCard";

import SetUpCard from "./SetUpCard";
import { Cards } from "./setup-icons";
const SetUpCards = () => {
  return (
    <>
      {Cards.map((Card) => (
        <MotionCard key={Card.title}>
          <SetUpCard
            Imgs={Card.Imgs}
            description={Card.description}
            href={Card.href}
            left={Card.left}
            marginBottom={Card.marginBottom}
            title={Card.title}
            zIndex={Card.zIndex}
          />
        </MotionCard>
      ))}
    </>
  );
};

export default SetUpCards;
