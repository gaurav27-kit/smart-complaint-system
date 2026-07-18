import { FaShieldAlt } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <FaShieldAlt className="text-3xl text-blue-600" />
      <div>
        <h1 className="text-xl font-bold text-gray-900">
          SCMS
        </h1>
        <p className="text-xs text-gray-500">
          Smart Complaint System
        </p>
      </div>
    </div>
  );
}

export default Logo;