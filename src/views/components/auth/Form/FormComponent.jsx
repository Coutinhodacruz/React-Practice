import React from "react";
import "../../../../styles/form/FormComponent.css";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        firstName: "",
        lastName: "",
        email: ""
      },
      address: {
        address: "",
        state: ""
      },
      skills: {
        techSkills: {
          name: ""
        },
        softSkills: {
          name: ""
        }
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { skills } = this.state;

    if (name.includes("techSkills")) {
      this.setState({
        skills: {
          ...skills,
          techSkills: {
            name: value
          }
        }
      });
    } else if (name.includes("softSkills")) {
      this.setState({
        skills: {
          ...skills,
          softSkills: {
            name: value
          }
        }
      });
    } else if (name.includes("address") || name.includes("state")) {
      this.setState({
        address: {
          ...this.state.address,
          [name]: value
        }
      });
    } else {
      this.setState({
        name: {
          ...this.state.name,
          [name]: value
        }
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  renderSubmittedData = () => {
    const { name, address, skills } = this.state;

    return (
      <div>
        <h2>Submitted Form Data</h2>
        <p>
          <strong>Name:</strong> {name.firstName} {name.lastName}
        </p>
        <p>
          <strong>Email:</strong> {name.email}
        </p>
        <p>
          <strong>Address:</strong> {address.address}
        </p>
        <p>
          <strong>State:</strong> {address.state}
        </p>
        <p>
          <strong>Technical Skills:</strong> {skills.techSkills.name}
        </p>
        <p>
          <strong>Soft Skills:</strong> {skills.softSkills.name}
        </p>
      </div>
    );
  };

  render() {
    const { name, address, skills, submitted } = this.state;

    return (
      <div>
        {submitted ? (
          this.renderSubmittedData()
        ) : (
          <FormComponent
            name={name}
            address={address}
            skills={skills}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default FormContainer;

// import React, { useState } from "react";
// import "../../../../styles/form/FormComponent.css";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     name: {
//       firstName: "",
//       lastName: "",
//       email: ""
//     },
//     address: {
//       address: "",
//       state: ""
//     },
//     skills: {
//       techSkills: {
//         name: ""
//       },
//       softSkills: {
//         name: ""
//       }
//     },
//     submitted: false
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const { skills } = formData;

//     if (name.includes("techSkills")) {
//       setFormData({
//         ...formData,
//         skills: {
//           ...skills,
//           techSkills: {
//             name: value
//           }
//         }
//       });
//     } else if (name.includes("softSkills")) {
//       setFormData({
//         ...formData,
//         skills: {
//           ...skills,
//           softSkills: {
//             name: value
//           }
//         }
//       });
//     } else if (name.includes("address") || name.includes("state")) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name]: value
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         name: {
//           ...formData.name,
//           [name]: value
//         }
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ ...formData, submitted: true });
//   };

//   const renderSubmittedData = () => {
//     const { name, address, skills } = formData;

//     return (
//       <div>
//         <h2>Submitted Form Data</h2>
//         <p>
//           <strong>Name:</strong> {name.firstName} {name.lastName}
//         </p>
//         <p>
//           <strong>Email:</strong> {name.email}
//         </p>
//         <p>
//           <strong>Address:</strong> {address.address}
//         </p>
//         <p>
//           <strong>State:</strong> {address.state}
//         </p>
//         <p>
//           <strong>Technical Skills:</strong> {skills.techSkills.name}
//         </p>
//         <p>
//           <strong>Soft Skills:</strong> {skills.softSkills.name}
//         </p>
//       </div>
//     );
//   };

//   const { name, address, skills, submitted } = formData;

//   return (
//     <div>
//       {submitted ? (
//         renderSubmittedData()
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <h2>Name</h2>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={name.firstName}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={name.lastName}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={name.email}
//             onChange={handleChange}
//           />

//           <h2>Address</h2>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={address.address}
//             onChange={handleChange}
//           />
//           <br />
//           <label>State:</label>
//           <input
//             type="text"
//             name="state"
//             value={address.state}
//             onChange={handleChange}
//           />

//           <h2>Skills</h2>
//           <label>Technical Skills:</label>
//           <input
//             type="text"
//             name="techSkills"
//             value={skills.techSkills.name}
//             onChange={handleChange}
//           />
//           <br />
//           <label>Soft Skills:</label>
//           <input
//             type="text"
//             name="softSkills"
//             value={skills.softSkills.name}
//             onChange={handleChange}
//           />

//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default FormComponent;








// class Elite:
//     def __init__(self):
//         self.isOn = False
//         self._temperature = 16
//         self._acName = "Coutinho"

//     def powerOn(self):
//         self.isOn = not self.isOn

//     def displayTemperature(self):
//         if self.isOn:
//             return self._temperature
//         else:
//             return "Off"

//     @property
//     def temperature(self):
//         return self._temperature

//     @temperature.setter
//     def temperature(self, value):
//         if self.isOn:
//             self._temperature = value

//     def setAcName(self, acName):
//         self._acName = acName

//     def getAcName(self):
//         return self._acName

//     def increaseTemperature(self):
//         if self._temperature < 30 and self.isOn:
//             self._temperature += 1

//     def decreaseTemperature(self):
//         if self.isOn and self._temperature > 0:
//             self._temperature -= 1


// elite = Elite()
// print(elite.getAcName())
// print("Increase temperature when it is off")
// elite.increaseTemperature()
// print(elite.displayTemperature())

// elite.powerOn()
// print("Power on")
// print(elite.displayTemperature())
// print("Decrease it when it is on")
// elite.decreaseTemperature()
// print(elite.displayTemperature())
