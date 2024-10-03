import { User } from "lucide-react";
import SettingsCard from "../SettingsCard/SettingsCard";

function Profile() {
  return (
    <SettingsCard title="Profile" icon={User}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          className="size-20 rounded-full object-cover mr-4"
          src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1727874867~exp=1727878467~hmac=83bf27e2a8c388712440faa024cdc258a432da62b103487e451998201a4f58b6&w=1060"
          alt="Profile"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100 text-center sm:text-start">
            John Doe
          </h3>
          <p className=" text-gray-400">jonhdoe@gmail.com</p>
        </div>
      </div>
      <div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-500 w-full sm:w-auto ">
          Edit Profile
        </button>
      </div>
    </SettingsCard>
  );
}

export default Profile;
