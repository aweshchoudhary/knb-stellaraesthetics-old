import { Icon } from "@iconify/react";
import Accordian, { AccordianBody } from "../../components/global/Accordian";
import Header from "../../components/global/Header";
import Tabs from "../../components/global/Tabs";
import Notes from "../../components/deal/Notes";
import Activity from "../../components/deal/Activity";

const Deal = () => {
  const tabs = [
    {
      id: 1,
      name: "notes",
      icon: "material-symbols:sticky-note-2-outline",
      component: <Notes />,
    },
    {
      id: 2,
      name: "activity",
      icon: "material-symbols:calendar-month-outline",
      component: <Activity />,
    },
  ];
  return (
    <>
      <Header title={"Deal"} />
      <section className="header border-b border-collapse px-5 py-3 h-[120px]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="md:text-3xl text-2xl font-semibold">
              Example Company Deal
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <button className="btn-filled bg-green-600 border-0">Won</button>
              <button className="btn-filled bg-red-600 border-0">Lost</button>
            </div>
            <div>
              <button className="btn-outlined text-xl">
                <Icon icon="uil:arrow-down" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-1">
          <button className="px-2 py-1 flex-1 text-white bg-primary text-center">
            <p>Requested: 29 Days</p>
          </button>
          <button className="px-2 py-1 flex-1 bg-paper text-center hover:bg-primary hover:text-white">
            <p>To Do</p>
          </button>
          <button className="px-2 py-1 flex-1 bg-paper text-center hover:bg-primary hover:text-white">
            <p>In Progress</p>
          </button>
        </div>
      </section>
      <section className="flex h-[calc(100%-190px)]">
        <aside className="w-[350px] shrink-0 border-r h-full overflow-auto">
          <Accordian title={"Summary"}>
            <AccordianBody>
              <div>
                <div className="money/value flex items-center gap-4 mb-4">
                  <Icon icon="ph:money" className="text-2xl" />
                  <p>10,000 Rs</p>
                </div>
                <div className="expected-close-date flex items-center gap-4 mb-4">
                  <Icon icon="bx:calendar" className="text-2xl" />
                  <p>29 March, 2023</p>
                </div>
                <div className="expected-close-date flex items-center gap-4 mb-4">
                  <Icon icon="uil:user" className="text-2xl" />
                  <p>Awesh Choudhary</p>
                </div>
                <div className="expected-close-date flex items-center gap-4 mb-4">
                  <Icon icon="uil:building" className="text-2xl" />
                  <p>Stellar Aesthetics</p>
                </div>
              </div>
            </AccordianBody>
          </Accordian>
          <Accordian title={"Overview"}>
            <AccordianBody>
              <div>
                <div className="money/value font-medium flex items-center justify-between mb-3">
                  <p>Deal Age:</p>
                  <p>29 Days</p>
                </div>
                <div className="money/value flex items-center justify-between mb-3">
                  <p>Inactive (Days):</p>
                  <p>25 Days</p>
                </div>
                <div className="money/value flex items-center justify-between mb-3">
                  <p>Created:</p>
                  <p>1 March, 2023</p>
                </div>
                <div className="money/value flex items-center justify-between mb-3">
                  <p>Closing Date:</p>
                  <p>29 March, 2023</p>
                </div>
              </div>
            </AccordianBody>
          </Accordian>
        </aside>
        <div className="flex-1 p-5 bg-paper">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
};

export default Deal;
