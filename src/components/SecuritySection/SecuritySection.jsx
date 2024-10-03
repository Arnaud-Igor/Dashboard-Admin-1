import { Lock } from "lucide-react";
import SettingsCard from "../SettingsCard/SettingsCard";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useState } from "react";

function SecuritySection() {
  const [security, setSecurity] = useState(true);

  const handleToggle = () => {
    setSecurity(!security);
  };

  return (
    <SettingsCard title="Security" icon={Lock}>
      <ToggleSwitch
        label="Two-factor authentication"
        handleToggle={handleToggle}
        isOn={security}
      />
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-500 w-full sm:w-auto ">
          Change Password
        </button>
      </div>
    </SettingsCard>
  );
}

export default SecuritySection;
