import React from "react";

const ParsedResult: React.FC<{ result: any }> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="space-y-5 border border-gray-200 bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-2xl font-semibold text-gray-800">✅ Parsed Aadhaar Data</h2>
        {result.processingTime && (
          <span className="text-xs text-gray-500">
            Processed in {result.processingTime}ms
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Aadhaar Number</span>
          <div className="font-medium text-gray-800 flex items-center">
            {result.aadhaarNumber}
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              🔒 Masked
            </span>
          </div>
        </div>
        <div>
          <span className="text-gray-500">Name</span>
          <div className="font-medium text-gray-800">{result.name}</div>
        </div>
        <div>
          <span className="text-gray-500">Date of Birth</span>
          <div className="font-medium text-gray-800">{result.dob}</div>
        </div>
        <div>
          <span className="text-gray-500">Gender</span>
          <div className="font-medium text-gray-800">{result.gender}</div>
        </div>
        <div className="col-span-2">
          <span className="text-gray-500">Address</span>
          <div className="font-medium text-gray-800">{result.address}</div>
        </div>
        <div>
          <span className="text-gray-500">Pincode</span>
          <div className="font-medium text-gray-800">{result.pincode}</div>
        </div>
      </div>

      {result.confidence && (
        <div className="mt-4 pt-3 border-t">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Extraction Confidence</span>
            <span
              className={`font-medium ${
                result.confidence >= 80
                  ? "text-green-600"
                  : result.confidence >= 60
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {result.confidence}%{" "}
              {result.confidence >= 80
                ? "🟢"
                : result.confidence >= 60
                ? "🟡"
                : "🔴"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParsedResult;
