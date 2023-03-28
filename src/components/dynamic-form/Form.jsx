import { Icon } from "@iconify/react";
import { useState } from "react";
import AddInput from "./AddInput";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customFields, setCustomFields] = useState([]);
  const [customField, setCustomField] = useState({
    mainType: "input",
    subType: "text",
    name: "",
    value: "",
  });
  function setCustomFieldFn(name, value) {
    setCustomField((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function createCustomField() {
    setCustomFields((prev) => [...prev, customField]);
    setCustomField({
      mainType: "input",
      subType: "text",
      name: "",
      value: "",
    });
    setIsOpen(false);
  }
  function changeValue(inputId, value) {
    const updatedFields = customFields.map((input, index) => {
      if (index === inputId) {
        input["value"] = value;
      }
      return input;
    });
    setCustomFields(updatedFields);
  }
  return (
    <div className="border-t mt-5 pt-3">
      <div className="mt-3">
        {customFields.length ? (
          <h2 className="text-xl mb-2">Custom Fields</h2>
        ) : null}
        {customFields.map((input, index) => {
          return input.mainType === "input" ? (
            <>
              <label htmlFor={input.name} className="block mb-1">
                {input.name}
              </label>
              <input
                key={index}
                name={input.name}
                id={input.name}
                value={input.value}
                className="input my-1"
                type={input.subType}
                placeholder={input.placeholder || input.name}
                onChange={(e) => changeValue(index, e.target.value)}
              />
            </>
          ) : (
            <>
              <label htmlFor={input.name} className="block mb-1">
                {input.name}
              </label>
              <textarea
                key={index}
                className="input my-1"
                name={input.name}
                id={input.name}
                value={input.value}
                placeholder={input.placeholder || input.name}
                onChange={(e) => changeValue(index, e.target.value)}
              />
            </>
          );
        })}
      </div>
      <AddInput
        setCustomFieldFn={setCustomFieldFn}
        customField={customField}
        createCustomField={createCustomField}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default Form;
