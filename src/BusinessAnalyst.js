import './BusinessAnalyst.css';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom"; 

function BusinessAnalyst() {
  const [visible, setVisibleSection] = useState('section1');
  const [zonevisible, setZoneVisibleSection] = useState('section01');
  const [addzonevisible, setAddZoneVisibleSection] = useState('section1');
  const [updatezonevisible, setUpdateZoneVisibleSection] = useState('section0');
  
  const showSection = (section) => {
    setVisibleSection(section);
  }
  const showZoneSection = (section) => {
    setZoneVisibleSection(section);
  }
  const showAddZoneSection = (section) => {
    setAddZoneVisibleSection(section);
  }
  const showUpdateZoneSection = (section) => {
    setUpdateZoneVisibleSection(section);
  }

  const[Zone1Data, setZone1Data] = useState([]);
  const[Zone2Data, setZone2Data] = useState([]);
  const[Zone3Data, setZone3Data] = useState([]);
  const[Zone4Data, setZone4Data] = useState([]);
  const[StaffData, setStaffData] = useState([]);
  const[Ride1Data, setRide1Data] = useState([]);
  const[Stall1Data, setStall1Data] = useState([]);
  const[Shop1Data, setShop1Data] = useState([]);
  const[Ride2Data, setRide2Data] = useState([]);
  const[Stall2Data, setStall2Data] = useState([]);
  const[Shop2Data, setShop2Data] = useState([]);
  const[Ride3Data, setRide3Data] = useState([]);
  const[Stall3Data, setStall3Data] = useState([]);
  const[Shop3Data, setShop3Data] = useState([]);
  const[Ride4Data, setRide4Data] = useState([]);
  const[Stall4Data, setStall4Data] = useState([]);
  const[Shop4Data, setShop4Data] = useState([]);
  const[InactiveRide1Data, setInactiveRide1Data] = useState([]);
  const[InactiveRide2Data, setInactiveRide2Data] = useState([]);
  const[InactiveRide3Data, setInactiveRide3Data] = useState([]);
  const[InactiveRide4Data, setInactiveRide4Data] = useState([]);
  const[InactiveStall1Data, setInactiveStall1Data] = useState([]);
  const[InactiveStall2Data, setInactiveStall2Data] = useState([]);
  const[InactiveStall3Data, setInactiveStall3Data] = useState([]);
  const[InactiveStall4Data, setInactiveStall4Data] = useState([]);
  const[InactiveShop1Data, setInactiveShop1Data] = useState([]);
  const[InactiveShop2Data, setInactiveShop2Data] = useState([]);
  const[InactiveShop3Data, setInactiveShop3Data] = useState([]);
  const[InactiveShop4Data, setInactiveShop4Data] = useState([]);
  const[REPData, setREPData] = useState([]);
  useEffect(() => {
    
    fetch('/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setZone1Data(data.Zone1Data);
        setZone2Data(data.Zone2Data);
        setZone3Data(data.Zone3Data);
        setZone4Data(data.Zone4Data);
        setInactiveRide1Data(data.InactiveRide1Data);
        setInactiveRide2Data(data.InactiveRide2Data);
        setInactiveRide3Data(data.InactiveRide3Data);
        setInactiveRide4Data(data.InactiveRide4Data);
        setRide1Data(data.Ride1Data);
        setRide2Data(data.Ride2Data);
        setRide3Data(data.Ride3Data);
        setRide4Data(data.Ride4Data);
        setStall1Data(data.Stall1Data);
        setStall2Data(data.Stall2Data);
        setStall3Data(data.Stall3Data);
        setStall4Data(data.Stall4Data);
        setInactiveStall1Data(data.InactiveStall1Data);
        setInactiveStall2Data(data.InactiveStall2Data);
        setInactiveStall3Data(data.InactiveStall3Data);
        setInactiveStall4Data(data.InactiveStall4Data);
        setShop1Data(data.Shop1Data);
        setShop2Data(data.Shop2Data);
        setShop3Data(data.Shop3Data);
        setShop4Data(data.Shop4Data);
        setInactiveShop1Data(data.InactiveShop1Data);
        setInactiveShop2Data(data.InactiveShop2Data);
        setInactiveShop3Data(data.InactiveShop3Data);
        setInactiveShop4Data(data.InactiveShop4Data);
        setStaffData(data.StaffData);
        setREPData(data.REPData);

      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleupdateemppass = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateemppass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      alert("Update Password Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  
  const handleaddstallinfob = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addstallinfob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      alert("Add New Restaurant Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleaddshopinfob = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/addshopinfob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      alert("Add New Shop Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
 
  const handleupdatestallinfob = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updatestallinfob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      alert("Update Restaurant Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
  const handleupdateshopinfob = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch('/api/updateshopinfob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      alert("Update Shop Successfully!")
      console.log(result); 
      form.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong! Please try again!")
    }
  };
const [CusReportData, setCusReportData] = useState([]);

const handledatecusreport = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('/api/handledatecusreport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    setCusReportData(result);
    console.log(result); 
    form.reset();
    
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("Something went wrong! Please try again!")
  }
};

const navigate = useNavigate();

const signOut = () => {
  localStorage.removeItem("authenticatedB");
  localStorage.removeItem("idB");
  navigate("/");
};

function GetEmpObj() {
  for (const obj of StaffData) {
    if (obj.employee_id === localStorage.getItem("idB")) {
      return (
          <div key={obj.employee_id}>
            <h3>
              Employee ID: {obj.employee_id}
              <br></br>
              Department code: {obj.Dep_code}
            </h3>
            <p>
            <b>Hourly wage:</b> {obj.hourly_pay}  <b>| Salary:</b> {obj.salary}
            <br></br>
            <br></br>
            <b>First Name:</b> {obj.first_name} <b>| Middle Initial:</b> {obj.mid_initial}
            <br></br>
            <b>Last Name:</b> {obj.last_name}
            </p>
            <h2>
              Contact
            </h2>
            <p>
            <b>Address:</b> {obj.home_address}
            <br></br>
            <b>Email:</b> {obj.email}
            <br></br>
            <b>Phone number:</b> {obj.phone_number}
            </p>
            <h2> Security Information</h2>
            <p>
            <b>Username:</b> {obj.user_tag}
            <br></br>
            <b>Password:</b> {obj.user_pass}
            </p>
          </div>
      );
    }
  }
}

function ReturnEmployeeName() {
  for (const obj of StaffData) {
    if(obj.employee_id == localStorage.getItem("idM")) {
      return (
        <div>Welcome back, {obj.first_name}!</div>
      );
    }
  }
}


if (localStorage.getItem("authenticatedB") === false || localStorage.getItem("authenticatedB") == null) {
  console.log("Unsuccessful login");
  return <Navigate replace to={navigate(-1)} />;
}
else{

  return (
       <div className="App">
       <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item"><u>DB Theme Park</u></li>
        <li className="nav-item" id='signout'>
        <button onClick={signOut}>Sign out</button>
          </li>
      </ul>
      {StaffData.map((employee) => (
        <div className="welcome-back-employee" key={employee.id}>
          <ReturnEmployeeName />
        </div>
        ))}
        <div className="visitortype">
          Business Analyst
        </div>

        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Account Information
              </button>
              <button className="HazardRep"onClick={() => showSection('section2')}>
                Business Report
              </button>
              <button className="ZoneInfoButton"onClick={() => showSection('section3')}>
                Zone Information
              </button>
              <button className="AddZoneInfo"onClick={() => showSection('section4')}>
                Add New Zone Information
              </button>
              <button className="UpdateZoneInfo"onClick={() => showSection('section5')}>
                Update Zone Information
              </button>
            </div>
            <div className="Menutxt">Menu</div>


            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                  <div class = "Account-Info">
                  <GetEmpObj />
                  <p>
                    <b>
                    Do you want to change your password?
                    <br></br>
                    You must have a permit code from your supervisor for change security information!
                    </b>
                  </p>
                      <form id="UpdateAccPas" onSubmit={handleupdateemppass} method="post" action="/submit">
                          <p>
                              <label for="CurrentPassword ">Current Password:  </label>
                              <input type="text" id="CurrentPassword" name="CurrentPassword" min="6" max="20" required/>

                              <label for="Password ">New Password:  </label>
                              <input type="text" id="Password" name="Password" min="6" max="20" required/>
                              
                              <label for="PermitCode ">Permit Code:  </label>
                              <input type="int" id="PermitCode" name="PermitCode" min="4" max="4" required/>
  
                          </p>
                          <p>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                
                   </div>
                   
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Amount of Customers Report</h2>
                <p>Please choose a day range for report.</p>
                <form id="UpdateAccPas" onSubmit={handledatecusreport}  method="post" action="/submit">
                  <p>
                    <label htmlFor="startDate">From: </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      required
                    />

                    <label htmlFor="endDate">To: </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      required
                    />
                  </p>
                  <p>
                    <button id="UpdateAccButton" type="submit"> Submit</button>
                  </p>
                </form>
                <p> All information of the report have been reported weekly, and monthly
                  
                </p>
                <table>
                      <thead>
                      <tr>
                        <th>Frequency</th>
                        <th>Year</th>
                        <th>From</th>
                        <th>To</th>
                        <th>New Amount of Customers</th>
                        <th>New Amount of Customer</th>
                        <th>Total Amount of Customer</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {CusReportData.map((table) => (
                        <tr key={table.id}>
                        <td>{table.Frequency}</td>
                        <td>{table.Year}</td>
                        <td>{new Date(table.startDate).toLocaleDateString('en-US')}</td>
                        <td>{new Date(table.endDate).toLocaleDateString('en-US')}</td>
                        <td>{table.NewAmount}</td>
                        <td>{table.OldAmount}</td>
                        <td>{table.AllCustomersAmount}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>
                <h2>Restaurants and Merchandise Shops Revenue, Expense, Profit</h2>
                <h3>Restaurant Report</h3>
                <table>
                      <thead>
                      <tr>
                        <th>Total Restaurant Revenue</th>
                        <th>Total Restaurant Expense</th>
                        <th>Total Restaurant Profit</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {REPData.map((rep) => (
                        <tr key={rep.id}>
                        <td>{rep.Total_Food_Stall_Revenue}</td>
                        <td>{rep.Total_Food_Stall_Expenses}</td>
                        <td>{rep.Total_Food_Stall_Profit}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>

                <h3>Merchandise Shop Report</h3>
                <table>
                      <thead>
                      <tr>
                        <th>Total Merchandise Shop Revenue</th>
                        <th>Total Merchandise Shop Expense</th>
                        <th>Total Merchandise Shop Profit</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {REPData.map((rep) => (
                        <tr key={rep.id}>
                        <td>{rep.Total_Merchandise_Revenue}</td>
                        <td>{rep.Total_Merchandise_Expenses}</td>
                        <td>{rep.Total_Merchandise_Profit}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>

                <h3>Grand Total Profit</h3>
                <table>
                      <thead>
                      <tr>
                        <th>Amount</th>
                       
                        
                      </tr>
                      </thead>
                      <tbody>
                      {REPData.map((rep) => (
                        <tr key={rep.id}>
                        <td>{rep.Grand_Total_Profit}</td>
                        </tr>
                      ))}
                      </tbody>
                </table>
                 </div>
              </div>
              <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
                <div className="optiontextbox">
                <h2>Zone Information</h2>
                
                <div className="zonerideinfo">
                {Zone1Data.map((theme_zone) => (
                  <button className="zonesectionbutton" onClick={() => showZoneSection('section01')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                {Zone2Data.map((theme_zone) => (
                  <button className="zonesectionbutton" onClick={() => showZoneSection('section02')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                <br></br>
                {Zone3Data.map((theme_zone) => (
                  <button className="zonesectionbutton" onClick={() => showZoneSection('section03')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
                {Zone4Data.map((theme_zone) => (
                  <button className="zonesectionbutton" onClick={() => showZoneSection('section04')} key={theme_zone.id}>
                    {theme_zone.Zone_code} - {theme_zone.Name}
                  </button>
                ))}
            </div>
                  <div style={{ display: zonevisible === 'section01' ? 'block' : 'none' }}>
                    <h2>
                    {Zone1Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Description</th>
                        <th>Safety Rules</th>
                        <th>Daily Riders</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Accessibility</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {Ride1Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      {InactiveRide1Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall1Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      {InactiveStall1Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop1Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      {InactiveShop1Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  
                  </div>
                  <div style={{ display: zonevisible === 'section02' ? 'block' : 'none' }}>
                  <h2>
                    {Zone2Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Description</th>
                        <th>Safety Rules</th>
                        <th>Daily Riders</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Accessibility</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {Ride2Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      {InactiveRide2Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall2Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      {InactiveStall2Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop2Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      {InactiveShop2Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  
                  </div>
                  <div style={{ display: zonevisible === 'section03' ? 'block' : 'none' }}>
                    <h2>
                    {Zone3Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Description</th>
                        <th>Safety Rules</th>
                        <th>Daily Riders</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Accessibility</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {Ride3Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      {InactiveRide3Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall3Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      {InactiveStall3Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop3Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      {InactiveShop3Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  
                  </div>
                  <div style={{ display: zonevisible === 'section04' ? 'block' : 'none' }}>
                    <h2>
                    {Zone4Data.map((theme_zone) => (
                      <u key={theme_zone.id}>{theme_zone.Zone_code} - {theme_zone.Name}</u>
                    ))}
                    </h2>
                  
                    <h2>Rides</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Ride ID</th>
                        <th>Ride Name</th>
                        <th>Description</th>
                        <th>Safety Rules</th>
                        <th>Daily Riders</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Accessibility</th>
                        
                      </tr>
                      </thead>
                      <tbody>
                      {Ride4Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      {InactiveRide4Data.map((ride_info) => (
                      <tr key={ride_info.id}>
                        <td>{ride_info.RideID}</td>
                        <td>{ride_info.RideName}</td>
                        <td>{ride_info.Description}</td>
                        <td>{ride_info.SafetyRules}</td>
                        <td>{ride_info.NumDailyRiders}</td>
                        <td>{ride_info.RideType}</td>
                        <td>{ride_info.OperationStatus}</td>
                        <td>{ride_info.Accessibility_Attraction}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Restaurants</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Stall ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Stall4Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      {InactiveStall4Data.map((food_stalls) => (
                      <tr key={food_stalls.id}>
                        <td>{food_stalls.Stall_ID}</td>
                        <td>{food_stalls.Name}</td>
                        <td>{food_stalls.Type}</td>
                        <td>{food_stalls.Status}</td>
                        <td>{food_stalls.Revenue}</td>
                        <td>{food_stalls.Expense}</td>
                        <td>{food_stalls.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                  <h2>Merchandise shop</h2>
                  <table>
                      <thead>
                      <tr>
                        <th>Shop ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Revenue</th>
                        <th>Expense</th>
                        <th>Profit</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Shop4Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      {InactiveShop4Data.map((Merchandise) => (
                      <tr key={Merchandise.id}>
                        <td>{Merchandise.Shop_id}</td>
                        <td>{Merchandise.Name}</td>
                        <td>{Merchandise.ProductType}</td>
                        <td>{Merchandise.Status}</td>
                        <td>{Merchandise.Revenue}</td>
                        <td>{Merchandise.Expenses}</td>
                        <td>{Merchandise.Profit}</td>
                      </tr>
                      ))}
                      </tbody>
                  </table>
                 
                  </div>
                
                 </div>
                 </div>
                 <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>
                  Add New Zone Information
                </h2>
                <div className="zonerideinfo">
                  <button className="zonesectionbutton" onClick={() => showAddZoneSection('section1')}>
                    Restaurant
                  </button>
                  <button className="zonesectionbutton" onClick={() => showAddZoneSection('section2')}>
                    Merchandise shop
                  </button>
            </div>
                      <div style={{ display: addzonevisible === 'section1' ? 'block' : 'none' }}>
                        <form onSubmit={handleaddstallinfob} method="post" action="/submit"> 
                          <p>
                              <label><b><u>New Restaurant Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Name">Restaurant Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="20" required/>
                              
                              <label for="Type">Type:  </label>
                              <select id = "Type" name="Type" required>
                                  <option value = ""> Select type </option>
                                  <option value = "Casual Dining"> Casual dining </option>
                                  <option value = "Quick service dining"> Quick service dining </option>
                                
                              </select>
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 
                              <label for="Revenue">Revenue:  </label>
                              <input type="int" id="Revenue" name="Revenue" required/>

                              <label for="Expenses">Expense:  </label>
                              <input type="int" id="Expenses" name="Expenses" required/>

                              <label for="Profit">Profit:  </label>
                              <input type="int" id="Profit" name="Profit" required/>
                          
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                      <div style={{ display: addzonevisible === 'section2' ? 'block' : 'none' }}>
                        <form onSubmit={handleaddshopinfob} method="post" action="/submit"> 
                          <p>
                              <label><b><u>New Merchandise Shop Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>

                              <label for="Name">Shop Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="ProductType">Product Type:  </label>
                              <input type="text" id="ProductType" name="ProductType" min="6" max="30" required/>
                              
                              <label for="ProductAmount">Product Amount:  </label>
                              <input type="int" id="ProductAmount" name="ProductAmount" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 

                              <label for="Revenue">Revenue:  </label>
                              <input type="int" id="Revenue" name="Revenue" required/>

                              <label for="Expenses">Expense:  </label>
                              <input type="int" id="Expenses" name="Expenses" required/>

                              <label for="Profit">Profit:  </label>
                              <input type="int" id="Profit" name="Profit" required/>
                          
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                 </div>
              </div>
              <div style={{ display: visible === 'section5' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>
                  Update Zone Information
                </h2>
                <div className="zonerideinfo">
                  
                  <button className="zonesectionbutton" onClick={() => showUpdateZoneSection('section0')}>
                    Restaurant
                  </button>
                  <button className="zonesectionbutton" onClick={() => showUpdateZoneSection('section1')}>
                    Merchandise shop
                  </button>
                  
            </div>
            
                      <div style={{ display: updatezonevisible === 'section0' ? 'block' : 'none' }}>
                        <form onSubmit={handleupdatestallinfob} method="post" action="/submit"> 
                          <p>
                              <label><b><u>Update Restaurant Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>
                              <label for="Stall_ID">Restaurant ID:  </label>
                              <input type="text" id="Stall_ID" name="Stall_ID" min="8" max="8" required/>

                              <label for="Name">Restaurant Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="30" required/>
                              
                              <label for="Type">Type:  </label>
                              <select id = "Type" name="Type" required>
                                  <option value = ""> Select type </option>
                                  <option value = "Casual Dining"> Casual dining </option>
                                  <option value = "Quick service dining"> Quick service dining </option>
                                
                              </select>

                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 

                              <label for="Revenue">Revenue:  </label>
                              <input type="int" id="Revenue" name="Revenue" required/>

                              <label for="Expense">Expense:  </label>
                              <input type="int" id="Expense" name="Expenses" required/>

                              <label for="Profit">Profit:  </label>
                              <input type="int" id="Profit" name="Profit" required/>
                          
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                      <div style={{ display: updatezonevisible === 'section1' ? 'block' : 'none' }}>
                        <form onSubmit={handleupdateshopinfob} method="post" action="/submit"> 
                          <p>
                              <label><b><u>Update Merchandise Shop Information</u></b></label>
                              <label for="Zone_code">Zone code:  </label>
                              <select id = "Zone_code" name="Zone_code" required>
                                  <option value = ""> Select theme zone </option>
                                  {Zone1Data.map((theme_zone) => (
                                  <option value = "ZONE0001" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone2Data.map((theme_zone) => (
                                  <option value = "ZONE0002" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone3Data.map((theme_zone) => (
                                  <option value = "ZONE0003" key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                                  {Zone4Data.map((theme_zone) => (
                                  <option value = "ZONE0004"key={theme_zone.id}> {theme_zone.Zone_code}-{theme_zone.Name} </option>
                                  ))}
                              </select>
                              
                              <label for="Shop_id">Shop ID:  </label>
                              <input type="text" id="Shop_id" name="Shop_id" min="8" max="8" required/>

                              <label for="Name">Shop Name:  </label>
                              <input type="text" id="Name" name="Name" min="6" max="50" required/>
                              
                              <label for="ProductType">Product Type:  </label>
                              <input type="text" id="ProductType" name="ProductType" min="6" max="50" required/>
                              
                              <label for="ProductAmount">Product Amount:  </label>
                              <input type="int" id="ProductAmount" name="ProductAmount" required/>
                              
                              <label for="Status">Operation Status:  </label>
                              <select id = "Status" name="Status" required>
                                  <option value = ""> Select status </option>
                                  <option value = "Active"> Active </option>
                                  <option value = "Inactive"> Inactive </option>
                              </select> 

                              <label for="Revenue">Revenue:  </label>
                              <input type="int" id="Revenue" name="Revenue" required/>

                              <label for="Expenses">Expense:  </label>
                              <input type="int" id="Expenses" name="Expenses" required/>

                              <label for="Profit">Profit:  </label>
                              <input type="int" id="Profit" name="Profit" required/>
                          </p>
                          <p>
                            <br></br>
                              <button id="UpdateAccButton" type="submit">Submit</button>
                          </p>

                      </form>
                      </div>
                      
                 </div>
              </div>
              
            </div>
                  
                <br></br>
                
                  <br></br>

              </div>
            </div>
  );
}
}

export default BusinessAnalyst;
