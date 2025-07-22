// import { useState } from 'react';
// import { uploadAadhaarImages } from '../services/ocrService';

// const UploadForm = () => {
//   const [frontImg, setFrontImg] = useState<File | null>(null);
//   const [backImg, setBackImg] = useState<File | null>(null);
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!frontImg || !backImg) return alert('Please select both Aadhaar images');

//     const formData = new FormData();
//     formData.append('adhaarFrontFile', frontImg);
//     formData.append('adhaarBackFile', backImg);

//     setLoading(true);
//     try {
//       const response = await uploadAadhaarImages(formData);
//       setResult(response.data);
//     } catch (err) {
//       alert('Failed to extract Aadhaar data');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-md mt-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Aadhaar OCR Scanner</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left: Upload + Preview */}
//         <div className="space-y-6">
//           <div>
//             <label className="block font-medium mb-1">Aadhaar Front</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFrontImg(e.target.files?.[0] || null)}
//               className="mb-2 block w-full"
//             />
//             {frontImg && (
//               <img
//                 src={URL.createObjectURL(frontImg)}
//                 alt="Front Preview"
//                 className="w-full rounded border shadow"
//               />
//             )}
//           </div>

//           <div>
//             <label className="block font-medium mb-1">Aadhaar Back</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setBackImg(e.target.files?.[0] || null)}
//               className="mb-2 block w-full"
//             />
//             {backImg && (
//               <img
//                 src={URL.createObjectURL(backImg)}
//                 alt="Back Preview"
//                 className="w-full rounded border shadow"
//               />
//             )}
//           </div>

//           <button
//             onClick={handleUpload}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded shadow"
//             disabled={loading}
//           >
//             {loading ? 'Processing...' : 'Parse Aadhaar'}
//           </button>
//         </div>

//         {/* Right: Parsed Info */}
//         {result && (
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold mb-4 border-b pb-2">Parsed Data</h2>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <label className="block text-gray-500">Aadhaar Number</label>
//                 <div className="font-medium">{result.aadhaarNumber}</div>
//               </div>
//               <div>
//                 <label className="block text-gray-500">Name on Aadhaar</label>
//                 <div className="font-medium">{result.name}</div>
//               </div>
//               <div>
//                 <label className="block text-gray-500">Date of Birth</label>
//                 <div className="font-medium">{result.dob}</div>
//               </div>
//               <div>
//                 <label className="block text-gray-500">Gender</label>
//                 <div className="font-medium">{result.gender}</div>
//               </div>
//               <div className="col-span-2">
//                 <label className="block text-gray-500">Address</label>
//                 <div className="font-medium">{result.address}</div>
//               </div>
//               <div>
//                 <label className="block text-gray-500">Pincode</label>
//                 <div className="font-medium">{result.pincode}</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;




import { useState } from 'react';
import { uploadAadhaarImages } from '../services/ocrService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadForm = () => {
  const [frontImg, setFrontImg] = useState<File | null>(null);
  const [backImg, setBackImg] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!frontImg || !backImg) {
      toast.error('Please select both Aadhaar images');
      return;
    }

    const formData = new FormData();
    formData.append('adhaarFrontFile', frontImg);
    formData.append('adhaarBackFile', backImg);

    setLoading(true);
    setResult(null);

    try {
      const response = await uploadAadhaarImages(formData);
      setResult(response.data);
      toast.success('Aadhaar data extracted successfully!');
    } catch (err: any) {
      console.error('Upload error:', err); // For debugging
      
      let errorMessage = 'Failed to extract Aadhaar data.';
      
      // Check different possible error response structures
      if (err?.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err?.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      
      toast.error(errorMessage);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md mt-10 border border-gray-200">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">🆔 Aadhaar OCR Scanner</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Upload Section */}
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">Aadhaar Front Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFrontImg(e.target.files?.[0] || null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {frontImg && (
              <img
                src={URL.createObjectURL(frontImg)}
                alt="Front Preview"
                className="mt-3 rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
              />
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">Aadhaar Back Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBackImg(e.target.files?.[0] || null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {backImg && (
              <img
                src={URL.createObjectURL(backImg)}
                alt="Back Preview"
                className="mt-3 rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
              />
            )}
          </div>

          <button
            onClick={handleUpload}
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-md shadow-md transition-all duration-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
            }`}
          >
            {loading ? '🔄 Processing Aadhaar...' : '🚀 Parse Aadhaar'}
          </button>
        </div>

        {/* Parsed Data Section */}
        {result && (
          <div className="space-y-5 border border-gray-200 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold border-b pb-3 text-gray-800">✅ Parsed Aadhaar Data</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Aadhaar Number</span>
                <div className="font-medium text-gray-800">{result.aadhaarNumber}</div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;