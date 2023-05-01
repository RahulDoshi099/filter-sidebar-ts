import "./sidebar.scss";
import React from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import arrowImage from "../../src/public/arrow.png";

type SidebarState = {
  isOpen?: boolean;
  bloodlineOpen: boolean;
  genderOpen: boolean;
  percentageOpen: boolean;
  bloodline: string[];
  gender: string[];
  percentage: string[];
};
// interface SidebarState {
//   // define properties with known keys and types
//   isOpen: boolean;
//   categories: string[];
//   tags: string[];

//   // define the index signature for accessing any string properties
//   [key: string]: string[] | boolean;
// }

type SidebarProps = {
  state: SidebarState;
  setState: React.Dispatch<React.SetStateAction<SidebarState>>;
};

const Sidebar = ({ state, setState }: SidebarProps) => {
  const toggleBloodline = (): void => {
    setState({ ...state, bloodlineOpen: !state.bloodlineOpen });
  };

  const toggleGender = (): void => {
    setState({ ...state, genderOpen: !state.genderOpen });
  };

  const togglePercentage = (): void => {
    setState({ ...state, percentageOpen: !state.percentageOpen });
  };

  const toggleCheckbox = (
    type: "bloodline" | "gender" | "percentage",
    value: string
  ) => {
    let updatedArray = [...state[type]];
    if (updatedArray.includes(value)) {
      updatedArray = updatedArray.filter((item) => item !== value);
    } else {
      updatedArray.push(value);
    }
    setState({ ...state, [type]: updatedArray });
  };

  const clearAllHandler = (): void => {
    setState({
      isOpen: true,
      bloodlineOpen: false,
      genderOpen: false,
      percentageOpen: false,
      bloodline: [],
      gender: [],
      percentage: [],
    });
  };

  const closeSidebar = (): void => {
    setState({ ...state, isOpen: false });
  };

  return (
    <>
      <div className="sidebar-container">
        <div className={`sidebar ${state.isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h2>Filters</h2>
            <div className="btns">
              <button
                className="clearallbtn dark-green"
                onClick={clearAllHandler}
              >
                Clear All
              </button>
              <button onClick={closeSidebar} className="close-button">
                X
              </button>
            </div>
          </div>
          <div className="sidebar-content">
            <div className="filter-container">
              <div className="menu-items" onClick={toggleBloodline}>
                <h3>Bloodline</h3>
                {/* <img
                  src={arrowImage}
                  alt=""
                  style={{ marginBottom: "10px" }}
                  className={`${
                    state.bloodlineOpen === true ? "rotate-180" : ""
                  }`}
                /> */}
                {/* <KeyboardArrowDownIcon
                  style={{ marginBottom: "10px" }}
                  className={`${
                    state.bloodlineOpen === true ? "rotate-180" : ""
                  }`}
                /> */}
                {/* <button style={{backgroundColor:"transparent", outline:"none", color:"white"}} > V </button> */}
              </div>
              {state.bloodlineOpen && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      name="bloodline"
                      value="G1 Black Top"
                      className="chekbox"
                      onChange={() =>
                        toggleCheckbox("bloodline", "G1 Black Top")
                      }
                      checked={state.bloodline.includes("G1 Black Top")}
                    />
                    G1 Black Top
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="bloodline"
                      value="G2 Zoom Top"
                      className="chekbox"
                      onChange={() =>
                        toggleCheckbox("bloodline", "G2 Zoom Top")
                      }
                      checked={state.bloodline.includes("G2 Zoom Top")}
                    />
                    G2 Zoom Top
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="bloodline"
                      value="G3 Temlee"
                      className="chekbox"
                      onChange={() => toggleCheckbox("bloodline", "G3 Temlee")}
                      checked={state.bloodline.includes("G3 Temlee")}
                    />
                    G3 Temlee
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="bloodline"
                      value="G4 Half Your Luck"
                      className="chekbox"
                      onChange={() =>
                        toggleCheckbox("bloodline", "G4 Half Your Luck")
                      }
                      checked={state.bloodline.includes("G4 Half Your Luck")}
                    />
                    G4 Half Your Luck
                  </label>
                </>
              )}
              <div className="menu-items" onClick={toggleGender}>
                <h3>Gender</h3>
                {/* <KeyboardArrowDownIcon
                  style={{ marginBottom: "10px" }}
                  className={`${state.genderOpen === true ? "rotate-180" : ""}`}
                /> */}
              </div>
              {state.genderOpen && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="Dog"
                      className="chekbox"
                      onChange={() => toggleCheckbox("gender", "Dog")}
                      checked={state.gender.includes("Dog")}
                    />
                    Dog
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="Bitch"
                      className="chekbox"
                      onChange={() => toggleCheckbox("gender", "Bitch")}
                      checked={state.gender.includes("Bitch")}
                    />
                    Bitch
                  </label>
                </>
              )}
              <div className="menu-items" onClick={togglePercentage}>
                <h3>Win Percentage</h3>
                {/* <KeyboardArrowDownIcon
                  style={{ marginBottom: "10px" }}
                  className={`${
                    state.percentageOpen === true ? "rotate-180" : ""
                  }`}
                /> */}
              </div>
              {/* {state.percentageOpen && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      name="percentage"
                      value="10%"
                      className="chekbox"
                      onChange={() => toggleCheckbox("percentage", "10%")}
                      checked={state.percentage.includes("10%")}
                    />
                    0 - 10%
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="percentage"
                      value="20%"
                      className="chekbox"
                      onChange={() => toggleCheckbox("percentage", "20%")}
                      checked={state.percentage.includes("20%")}
                    />
                   10 - 20%
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="percentage"
                      value="30%"
                      className="chekbox"
                      onChange={() => toggleCheckbox("percentage", "30%")}
                      checked={state.percentage.includes("30%")}
                    />
                    20 - 30%
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="percentage"
                      value="31%"
                      className="chekbox"
                      onChange={() => toggleCheckbox("percentage", "31%")}
                      checked={state.percentage.includes("31%")}
                    />
                    30+ %
                  </label>
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
