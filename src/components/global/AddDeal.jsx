import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDeal } from "../../state/features/dealSlice";

const AddDeal = ({ setIsOpen }) => {
  const stages = useSelector((state) => state.dealStages.data);
  const dispatch = useDispatch();

  const [dealData, setDealData] = useState({
    id: String(Date.now()),
    personName: null,
    organization: null,
    title: null,
    value: {
      value: null,
      type: "inr",
    },
    stage: "requested",
    label: null,
    email: {
      email: null,
      type: "work",
    },
    phone: {
      phone: null,
      type: "work",
      prefix: "+91",
    },
    closeDate: null,
  });
  const colors = useRef([
    "red-500",
    "yellow-500",
    "green-500",
    "purple-500",
    "primary",
  ]);
  function addNewDeal() {
    dispatch(addDeal(dealData));
    setIsOpen(false);
  }

  return (
    <>
      <div className="overflow-y-auto h-[80%]">
        <form className="container sm:flex">
          <div className="sm:w-1/2 shrink-0 border-r h-full p-3">
            <div className="input-fname mb-3">
              <label
                htmlFor="personName"
                className="text-textColor block  mb-2"
              >
                Contact Person
              </label>
              <input
                type="text"
                name="personName"
                id="personName"
                placeholder="Full Name"
                className="input"
                onChange={(e) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="input-organization mb-3">
              <label
                htmlFor="organization"
                className="text-textColor block mb-2"
              >
                Organization
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                placeholder="Organization Name"
                className="input"
                onChange={(e) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="input-title mb-3">
              <label htmlFor="title" className="text-textColor block  mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="input"
                onChange={(e) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="input-value mb-3">
              <label
                htmlFor="amount-value"
                className="text-textColor block mb-2"
              >
                Value
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="value"
                  id="amount-value"
                  placeholder="Value"
                  className="input w-1/2"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        value: {
                          ...prev.value,
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                />
                <select
                  name="type"
                  id="type"
                  className="input w-1/2"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        value: {
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                >
                  <option selected className="text-black" value="inr">
                    Indian Rupee
                  </option>
                  <option className="text-black" value="dollar">
                    US Dollar
                  </option>
                  <option className="text-black" value="inr">
                    Indian Rupee
                  </option>
                </select>
              </div>
            </div>
            <div className="input-stage mb-3">
              <label htmlFor="stage" className="text-textColor block mb-2">
                Stage
              </label>
              <select
                name="stage"
                id="stage"
                className="input capitalize"
                onChange={(e) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
              >
                <option className="text-black" value={"stage-1"} selected>
                  Select Stage
                </option>
                {stages.map((item, i) => {
                  return (
                    <option key={i} className="text-black" value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-color mb-3 flex items-center gap-1">
              {colors.current.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`w-[40px] h-[40px] hover:border-2 border-black rounded-full bg-${item}`}
                    type="button"
                  ></button>
                );
              })}
            </div>
            <div className="input-close-date mb-3">
              <label htmlFor="close-date" className="text-textColor block mb-2">
                Expected Close Date
              </label>
              <input
                type="date"
                id="close-date"
                onChange={(date) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      closeDate: date,
                    };
                  })
                }
                onSelect={(date) =>
                  setDealData((prev) => {
                    return {
                      ...prev,
                      closeDate: date,
                    };
                  })
                }
                className="input"
              />
            </div>
          </div>
          <div className="sm:w-1/2 shrink-0 h-full p-3">
            <div className="input-group mb-3">
              <label
                htmlFor="personName"
                className="text-textColor block  mb-2"
              >
                Phone
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input w-[60%]"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        phone: {
                          ...prev.phone,
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                />
                <select
                  name="type"
                  id="phone-type"
                  className="input w-[40%]"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        phone: {
                          ...prev.email,
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                >
                  <option className="text-black" value="work">
                    Work
                  </option>
                  <option className="text-black" value="personal">
                    Personal
                  </option>
                  <option className="text-black" value="other">
                    Other
                  </option>
                </select>
              </div>
            </div>
            <div className="input-group mb-3">
              <label
                htmlFor="personName"
                className="text-textColor block  mb-2"
              >
                Email
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input w-[60%]"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        email: {
                          ...prev.email,
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                />
                <select
                  name="email"
                  id="email-type"
                  className="border py-2 bg-transparent rounded px-3 w-[40%]"
                  onChange={(e) =>
                    setDealData((prev) => {
                      return {
                        ...prev,
                        email: {
                          [e.target.name]: e.target.value,
                        },
                      };
                    })
                  }
                >
                  <option className="text-black" value="inr">
                    Work
                  </option>
                  <option className="text-black" value="dollar">
                    Personal
                  </option>
                  <option className="text-black" value="inr">
                    Other
                  </option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className="py-2 px-5 h-[10%] bg-paper flex items-center justify-end gap-2">
        <button className="btn-outlined" onClick={() => setIsOpen(false)}>
          cancel
        </button>
        <button onClick={addNewDeal} className="btn-filled">
          save
        </button>
      </footer>
    </>
  );
};

export default AddDeal;
