import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept, index) => (
          <CoreConcept
            key={index}
            title={coreConcept.title}
            description={coreConcept.description}
            img={coreConcept.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
