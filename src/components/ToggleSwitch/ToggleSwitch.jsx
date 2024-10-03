function ToggleSwitch({ isOn, handleToggle, label }) {
  return (
    <div className="flex items-center justify-between space-y-4">
      <span className="text-gray-300">{label}</span>
      <button
        type="button"
        aria-pressed={isOn}
        className={`${
          isOn ? "bg-indigo-600" : "bg-gray-600"
        } relative inline-flex h-5 w-10 rounded-full transition-colors focus:outline-none`}
        onClick={handleToggle}
      >
        <span
          aria-hidden="true"
          className={`${
            isOn ? "translate-x-5" : "translate-x-0"
          } inline-block w-5 h-5 bg-white shadow-lg rounded-full transform ring-0 transition-transform`}
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;
