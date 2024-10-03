import { useState } from "react";
import SettingsCard from "../SettingsCard/SettingsCard";
import { BellRing } from "lucide-react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Notification() {
  const [notification, setNotification] = useState({
    push: true,
    email: false,
    sms: true,
  });

  const handleToggle = (key) => {
    setNotification((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SettingsCard title="Notification" icon={BellRing}>
      <ToggleSwitch
        handleToggle={() => handleToggle("push")}
        isOn={notification.push}
        label={"Push Notification"}
      />
      <ToggleSwitch
        handleToggle={() => handleToggle("email")}
        isOn={notification.email}
        label={"Email Notification"}
      />
      <ToggleSwitch
        handleToggle={() => handleToggle("sms")}
        isOn={notification.sms}
        label={"SMS Notification"}
      />
    </SettingsCard>
  );
}

export default Notification;
