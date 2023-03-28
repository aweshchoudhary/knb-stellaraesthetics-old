import { Icon } from "@iconify/react";

const AddInput = ({
  customField,
  setCustomFieldFn,
  createCustomField,
  isOpen,
  setIsOpen,
}) => {
  return isOpen ? (
    <div className="input-group">
      <h2>Main Type</h2>
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
        <div className="input-group my-1">
          {customField.mainType === "input" && (
            <>
              <label htmlFor="subtype-select" className="block mb-1">
                Sub Type
              </label>
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
            </>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            className="flex-1 input my-1"
            name="name"
            id="name"
            placeholder="Name"
            value={customField.name}
            onChange={(e) => setCustomFieldFn(e.target.name, e.target.value)}
          />
        </div>
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
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="btn-filled mt-3"
    >
      Add Custom Field
    </button>
  );
};

export default AddInput;
