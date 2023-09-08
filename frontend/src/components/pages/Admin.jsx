import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [information, setInformation] = useState([]);
  const [addInfo, setAddInfo] = useState(false);

  const [shopName, setShopName] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [shopPhone, setShopPhone] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [shopOpeningTime, setShopOpeningTime] = useState("");
  const [shopClosingTime, setShopClosingTime] = useState("");
  const [shopWorkingDays, setShopWorkingDays] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileInfo = await axios.get("http://localhost:5000/api/shop");
        console.log(profileInfo.data.message[0]);

        console.log(profileInfo.data.message[0].name);
        setShopName(profileInfo.data.message[0].name);
        setShopEmail(profileInfo.data.message[0].email);
        setShopPhone(profileInfo.data.message[0].phone);
        setShopLocation(profileInfo.data.message[0].location);
        setShopOpeningTime(profileInfo.data.message[0].openingTime);
        setShopClosingTime(profileInfo.data.message[0].closingTime);
        setShopWorkingDays(profileInfo.data.message[0].workingDays);

        if (profileInfo) {
          setInformation(profileInfo.data.message);
        }
      } catch (error) {
        console.log("something went wrong");
      }
    };

    fetchData();
  }, []);

  console.log(`let's see ${shopName}`);

  const handleAddInfo = () => {
    setAddInfo(true);
  };

  // =============================================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  // ==============================================
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAddingProfileInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/shop", {
        name,
        email,
        phone,
        location,
      });

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" flex mt-40 justify-between p-8 h-[100vh]">
      <div className={` flex-col gap-6 ${addInfo ? "hidden" : "flex"}`}>
        <h2 className=" font-bold text-2xl text-center">Profile</h2>
        {information.length === 0 && (
          <div className={` gap-4 items-center justify-center flex`}>
            <p className=" bg-red-500 px-4 py-2 rounded text-white underline">
              Your pdofile has no information, please add information to your
              profile
            </p>
            <button
              type="button"
              className=" bg-cyan-500 rounded px-4 py-2 hover:bg-cyan-400 hover:cursor-pointer"
              onClick={handleAddInfo}
            >
              Add Info
            </button>
          </div>
        )}
        <div className=" flex flex-col">
          <p>
            <span className=" font-bold">name:</span> {shopName}
          </p>
          <p>
            <span className=" font-bold">email:</span> {shopEmail}
          </p>
          <p>
            <span className=" font-bold">phone:</span> {shopPhone}
          </p>
          <p>
            <span className=" font-bold">location:</span> {shopLocation}
          </p>
          <p>
            <span className=" font-bold">opening_time:</span> {shopOpeningTime}
          </p>
          <p>
            <span className=" font-bold">closing_time:</span> {shopClosingTime}
          </p>
          <p>
            <span className=" font-bold">working_days:</span> {shopWorkingDays}{" "}
            days per week
          </p>
        </div>
      </div>
      <div className={`${addInfo ? "" : "hidden"}`}>
        <form
          className=" flex flex-col gap-2 shadow-md shadow-slate-400 p-8"
          onSubmit={handleAddingProfileInfo}
        >
          <h2 className=" mb-6 font-bold text-xl">
            Please Enter Your Correct Information
          </h2>
          <label className=" font-bold">Name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter your name here ..."
            type="text"
            className=" px-2 py-1 outline-none mb-2"
            onChange={handleNameChange}
          />
          <label className=" font-bold">Email</label>
          <input
            name="email"
            id="email"
            placeholder="Enter your email here ..."
            type="text"
            className=" px-2 py-1 outline-none mb-2"
            onChange={handleEmailChange}
          />
          <label className=" font-bold">Phone</label>
          <input
            name="phone"
            id="phone"
            placeholder="Enter your phone here ..."
            type="text"
            className=" px-2 py-1 outline-none mb-2"
            onChange={handlePhoneChange}
          />
          <label className=" font-bold">Location</label>
          <input
            name="location"
            id="location"
            placeholder="Enter your location ..."
            type="text"
            className=" px-2 py-1 outline-none mb-2"
            onChange={handleLocationChange}
          />
          <button
            type="submit"
            className=" bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 font-bold"
          >
            Add Info
          </button>
        </form>
      </div>
      <div>
        <p>Products</p>
        <h2>Add products</h2>
      </div>
    </div>
  );
};

export default Admin;
