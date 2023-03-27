import { Icon } from "@iconify/react";
import { useState } from "react";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customFields, setCustomFields] = useState([]);
  const [customField, setCustomField] = useState({
    mainType: "input",
    subType: "",
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
      subType: "",
      name: "",
      value: "",
    });
    setIsOpen(false);
  }
  function changeValue(inputId, name, value) {
    // const input = customFields[inputId];
    // input[name] = value;
    // const updatedFields = customFields.splice(inputId, 1, input);
    // setCustomFields(updatedFields);
    const updatedFields = customFields.map((input, index) => {
      if (index === inputId) {
        input["value"] = value;
      }
      return input;
    });
    setCustomFields(updatedFields);
  }
  return (
    <div>
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
                onChange={(e) =>
                  changeValue(index, e.target.name, e.target.value)
                }
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
                onChange={(e) =>
                  changeValue(index, e.target.name, e.target.value)
                }
              />
            </>
          );
        })}
      </div>
      {isOpen ? (
        <div className="input-group">
          <h2>Add Custom Fields</h2>
          <select
            onChange={(e) => setCustomFieldFn(e.target.name, e.target.value)}
            name="mainType"
            className="input my-1"
            id="input-select"
          >
            <option className="text-black" value="input">
              Input
            </option>
            <option className="text-black" value="textarea">
              Textarea
            </option>
          </select>
          <div>
            <input
              type="text"
              className="flex-1 input my-1"
              name="name"
              placeholder="Name"
              value={customField.name}
              onChange={(e) => setCustomFieldFn(e.target.name, e.target.value)}
            />
            {customField.mainType === "input" && (
              <select
                name="subType"
                onChange={(e) =>
                  setCustomFieldFn(e.target.name, e.target.value)
                }
                className="input"
                id="subtype-select"
              >
                <option className="text-black" value="text">
                  Text
                </option>
                <option className="text-black" value="number">
                  Number
                </option>
                <option className="text-black" value="date">
                  Date
                </option>
                <option className="text-black" value="file">
                  File
                </option>
              </select>
            )}
            <button
              type="button"
              onClick={createCustomField}
              className=" w-fit mt-2 btn-outlined"
            >
              <Icon icon="uil:plus" className="text-xl" /> create
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="btn-filled mt-3">
          Add Custom Field
        </button>
      )}
    </div>
  );
};

export default Form;
