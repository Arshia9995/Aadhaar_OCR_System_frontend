import React from "react";

interface FileUploadProps {
  label: string;
  file: File | null;
  error?: string;
  onFileChange: (file: File | null) => void;
  onClear: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  file,
  error,
  onFileChange,
  onClear,
  inputRef,
}) => {
  return (
    <div>
      <label className="block font-semibold mb-2 text-gray-700">{label}</label>
      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      {error && (
        <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200">
          ⚠️ {error}
        </div>
      )}

      {file && !error && (
        <div className="mt-3">
          <div className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
            />
            <button
              onClick={onClear}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-200"
              title="Clear image"
            >
              ✕
            </button>
            <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
              ✅ Valid
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
