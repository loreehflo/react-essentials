import React, { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton
          onSelect={() => handleSelect("components")}
          isSelected={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("jsx")}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("props")}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("state")}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>

      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          {" "}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
};

export default Examples;
