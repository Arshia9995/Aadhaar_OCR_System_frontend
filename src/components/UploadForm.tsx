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




// import { useState } from 'react';
// import { uploadAadhaarImages } from '../services/ocrService';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UploadForm = () => {
//   const [frontImg, setFrontImg] = useState<File | null>(null);
//   const [backImg, setBackImg] = useState<File | null>(null);
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!frontImg || !backImg) {
//       toast.error('Please select both Aadhaar images');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('adhaarFrontFile', frontImg);
//     formData.append('adhaarBackFile', backImg);

//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await uploadAadhaarImages(formData);
//       setResult(response.data);
//       toast.success('Aadhaar data extracted successfully!');
//     } catch (err: any) {
//       console.error('Upload error:', err); // For debugging
      
//       let errorMessage = 'Failed to extract Aadhaar data.';
      
//       // Check different possible error response structures
//       if (err?.response?.data?.message) {
//         errorMessage = err.response.data.message;
//       } else if (err?.response?.data?.error) {
//         errorMessage = err.response.data.error;
//       } else if (err?.message) {
//         errorMessage = err.message;
//       }
      
//       toast.error(errorMessage);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md mt-10 border border-gray-200">
//       <ToastContainer 
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">🆔 Aadhaar OCR Scanner</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Upload Section */}
//         <div className="space-y-6">
//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">Aadhaar Front Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFrontImg(e.target.files?.[0] || null)}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {frontImg && (
//               <img
//                 src={URL.createObjectURL(frontImg)}
//                 alt="Front Preview"
//                 className="mt-3 rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//               />
//             )}
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">Aadhaar Back Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setBackImg(e.target.files?.[0] || null)}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {backImg && (
//               <img
//                 src={URL.createObjectURL(backImg)}
//                 alt="Back Preview"
//                 className="mt-3 rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//               />
//             )}
//           </div>

//           <button
//             onClick={handleUpload}
//             disabled={loading}
//             className={`w-full py-3 text-white font-semibold rounded-md shadow-md transition-all duration-300 ${
//               loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
//             }`}
//           >
//             {loading ? '🔄 Processing Aadhaar...' : '🚀 Parse Aadhaar'}
//           </button>
//         </div>

//         {/* Parsed Data Section */}
//         {result && (
//           <div className="space-y-5 border border-gray-200 bg-white p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-semibold border-b pb-3 text-gray-800">✅ Parsed Aadhaar Data</h2>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <span className="text-gray-500">Aadhaar Number</span>
//                 <div className="font-medium text-gray-800">{result.aadhaarNumber}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Name</span>
//                 <div className="font-medium text-gray-800">{result.name}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Date of Birth</span>
//                 <div className="font-medium text-gray-800">{result.dob}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Gender</span>
//                 <div className="font-medium text-gray-800">{result.gender}</div>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-gray-500">Address</span>
//                 <div className="font-medium text-gray-800">{result.address}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Pincode</span>
//                 <div className="font-medium text-gray-800">{result.pincode}</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;





//.......................................................................................thazhe sherikkm illath

// import { useState, useRef } from 'react';
// import { uploadAadhaarImages } from '../services/ocrService';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UploadForm = () => {
//   const [frontImg, setFrontImg] = useState<File | null>(null);
//   const [backImg, setBackImg] = useState<File | null>(null);
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const frontInputRef = useRef<HTMLInputElement>(null);
//   const backInputRef = useRef<HTMLInputElement>(null);

//   const handleUpload = async () => {
//     if (!frontImg || !backImg) {
//       toast.error('Please select both Aadhaar images');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('adhaarFrontFile', frontImg);
//     formData.append('adhaarBackFile', backImg);

//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await uploadAadhaarImages(formData);
//       setResult(response.data);
//       toast.success('Aadhaar data extracted successfully!');
//     } catch (err: any) {
//       console.error('Upload error:', err); // For debugging
      
//       let errorMessage = 'Failed to extract Aadhaar data.';
      
//       // Check different possible error response structures
//       if (err?.response?.data?.message) {
//         errorMessage = err.response.data.message;
//       } else if (err?.response?.data?.error) {
//         errorMessage = err.response.data.error;
//       } else if (err?.message) {
//         errorMessage = err.message;
//       }
      
//       toast.error(errorMessage);
//     }

//     setLoading(false);
//   };

//   const clearFrontImage = () => {
//     setFrontImg(null);
//     if (frontInputRef.current) {
//       frontInputRef.current.value = '';
//     }
//   };

//   const clearBackImage = () => {
//     setBackImg(null);
//     if (backInputRef.current) {
//       backInputRef.current.value = '';
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md mt-10 border border-gray-200">
//       <ToastContainer 
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">🆔 Aadhaar OCR Scanner</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Upload Section */}
//         <div className="space-y-6">
//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">Aadhaar Front Image</label>
//             <input
//               ref={frontInputRef}
//               type="file"
//               accept="image/*"
//               onChange={(e) => setFrontImg(e.target.files?.[0] || null)}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {frontImg && (
//               <div className="mt-3">
//                 <div className="relative">
//                   <img
//                     src={URL.createObjectURL(frontImg)}
//                     alt="Front Preview"
//                     className="rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//                   />
//                   <button
//                     onClick={clearFrontImage}
//                     className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-200"
//                     title="Clear image"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">Aadhaar Back Image</label>
//             <input
//               ref={backInputRef}
//               type="file"
//               accept="image/*"
//               onChange={(e) => setBackImg(e.target.files?.[0] || null)}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {backImg && (
//               <div className="mt-3">
//                 <div className="relative">
//                   <img
//                     src={URL.createObjectURL(backImg)}
//                     alt="Back Preview"
//                     className="rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//                   />
//                   <button
//                     onClick={clearBackImage}
//                     className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-200"
//                     title="Clear image"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={handleUpload}
//             disabled={loading}
//             className={`w-full py-3 text-white font-semibold rounded-md shadow-md transition-all duration-300 ${
//               loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
//             }`}
//           >
//             {loading ? '🔄 Processing Aadhaar...' : '🚀 Parse Aadhaar'}
//           </button>
//         </div>

//         {/* Parsed Data Section */}
//         {result && (
//           <div className="space-y-5 border border-gray-200 bg-white p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-semibold border-b pb-3 text-gray-800">✅ Parsed Aadhaar Data</h2>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <span className="text-gray-500">Aadhaar Number</span>
//                 <div className="font-medium text-gray-800">{result.aadhaarNumber}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Name</span>
//                 <div className="font-medium text-gray-800">{result.name}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Date of Birth</span>
//                 <div className="font-medium text-gray-800">{result.dob}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Gender</span>
//                 <div className="font-medium text-gray-800">{result.gender}</div>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-gray-500">Address</span>
//                 <div className="font-medium text-gray-800">{result.address}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Pincode</span>
//                 <div className="font-medium text-gray-800">{result.pincode}</div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;



////newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww





// import { useState, useRef, useCallback } from 'react';
// import { uploadAadhaarImages } from '../services/ocrService';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UploadForm = () => {
//   const [frontImg, setFrontImg] = useState<File | null>(null);
//   const [backImg, setBackImg] = useState<File | null>(null);
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [validationErrors, setValidationErrors] = useState<{front?: string, back?: string}>({});
//   const frontInputRef = useRef<HTMLInputElement>(null);
//   const backInputRef = useRef<HTMLInputElement>(null);

//   // File validation constants
//   const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
//   const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//   const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

//   // Enhanced file validation
//   const validateFile = useCallback((file: File): string | null => {
//     // Check file size
//     if (file.size > MAX_FILE_SIZE) {
//       return 'File size must be less than 10MB';
//     }

//     // Check file type
//     if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
//       return 'Only JPEG, PNG, and WebP images are allowed';
//     }

//     // Check file extension
//     const extension = file.name.split('.').pop()?.toLowerCase();
//     if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
//       return 'Invalid file extension. Use jpg, jpeg, png, or webp';
//     }

//     // Basic security check for file name
//     if (file.name.includes('../') || file.name.includes('..\\')) {
//       return 'Invalid file name';
//     }

//     return null; // Valid file
//   }, []);

//   // Enhanced image quality validation
//   const validateImageQuality = useCallback((file: File): Promise<string | null> => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');

//       img.onload = () => {
//         // Check minimum dimensions
//         if (img.width < 400 || img.height < 250) {
//           resolve('Image resolution too low. Minimum 400x250 pixels required');
//           return;
//         }

//         // Check aspect ratio (rough check for card-like images)
//         const aspectRatio = img.width / img.height;
//         if (aspectRatio < 1.3 || aspectRatio > 2.2) {
//           resolve('Image doesn\'t appear to be a card format. Please upload a proper Aadhaar card image');
//           return;
//         }

//         // Check if image is too dark or too bright
//         canvas.width = 100; // Small sample for performance
//         canvas.height = 60;
//         ctx?.drawImage(img, 0, 0, 100, 60);
        
//         const imageData = ctx?.getImageData(0, 0, 100, 60);
//         if (imageData) {
//           const data = imageData.data;
//           let brightness = 0;
//           for (let i = 0; i < data.length; i += 4) {
//             brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
//           }
//           brightness = brightness / (data.length / 4);
          
//           if (brightness < 50) {
//             resolve('Image is too dark. Please use better lighting');
//             return;
//           }
//           if (brightness > 220) {
//             resolve('Image is overexposed. Please reduce lighting');
//             return;
//           }
//         }

//         resolve(null); // Image quality is acceptable
//       };

//       img.onerror = () => {
//         resolve('Invalid or corrupted image file');
//       };

//       img.src = URL.createObjectURL(file);
//     });
//   }, []);

//   // Enhanced file selection handler
//   const handleFileSelection = useCallback(async (file: File | null, type: 'front' | 'back') => {
//     if (!file) return;

//     // Clear previous validation errors
//     setValidationErrors(prev => ({ ...prev, [type]: undefined }));

//     // Basic validation
//     const basicError = validateFile(file);
//     if (basicError) {
//       setValidationErrors(prev => ({ ...prev, [type]: basicError }));
//       return;
//     }

//     // Advanced image quality validation
//     const qualityError = await validateImageQuality(file);
//     if (qualityError) {
//       setValidationErrors(prev => ({ ...prev, [type]: qualityError }));
//       return;
//     }

//     // Set the file if all validations pass
//     if (type === 'front') {
//       setFrontImg(file);
//     } else {
//       setBackImg(file);
//     }
//   }, [validateFile, validateImageQuality]);

//   const handleUpload = async () => {
//     if (!frontImg || !backImg) {
//       toast.error('Please select both Aadhaar images');
//       return;
//     }

//     // Final validation before upload
//     if (validationErrors.front || validationErrors.back) {
//       toast.error('Please fix validation errors before uploading');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('adhaarFrontFile', frontImg);
//     formData.append('adhaarBackFile', backImg);

//     setLoading(true);
//     setResult(null);
//     setUploadProgress(0);

//     // Simulate progress for better UX
//     const progressInterval = setInterval(() => {
//       setUploadProgress(prev => {
//         if (prev >= 90) return prev;
//         return prev + Math.random() * 10;
//       });
//     }, 200);

//     try {
//       const response = await uploadAadhaarImages(formData);
//       setUploadProgress(100);
//       setResult(response.data);
//       toast.success('Aadhaar data extracted successfully!');
      
//       // Security: Clear file references after successful processing
//       setTimeout(() => {
//         if (frontImg) URL.revokeObjectURL(URL.createObjectURL(frontImg));
//         if (backImg) URL.revokeObjectURL(URL.createObjectURL(backImg));
//       }, 100);

//     } catch (err: any) {
//       console.error('Upload error:', err); // For debugging
      
//       let errorMessage = 'Failed to extract Aadhaar data.';
      
//       // Enhanced error handling
//       if (err?.response?.status === 413) {
//         errorMessage = 'File size too large. Please use smaller images.';
//       } else if (err?.response?.status === 429) {
//         errorMessage = 'Too many requests. Please wait a moment and try again.';
//       } else if (err?.response?.status === 400) {
//         errorMessage = err?.response?.data?.message || 'Invalid Aadhaar images. Please check and try again.';
//       } else if (err?.response?.data?.message) {
//         errorMessage = err.response.data.message;
//       } else if (err?.response?.data?.error) {
//         errorMessage = err.response.data.error;
//       } else if (err?.message) {
//         errorMessage = err.message;
//       }
      
//       toast.error(errorMessage);
//       setUploadProgress(0);
//     } finally {
//       clearInterval(progressInterval);
//       setLoading(false);
//     }
//   };

//   const clearFrontImage = () => {
//     if (frontImg) {
//       URL.revokeObjectURL(URL.createObjectURL(frontImg));
//     }
//     setFrontImg(null);
//     setValidationErrors(prev => ({ ...prev, front: undefined }));
//     if (frontInputRef.current) {
//       frontInputRef.current.value = '';
//     }
//   };

//   const clearBackImage = () => {
//     if (backImg) {
//       URL.revokeObjectURL(URL.createObjectURL(backImg));
//     }
//     setBackImg(null);
//     setValidationErrors(prev => ({ ...prev, back: undefined }));
//     if (backInputRef.current) {
//       backInputRef.current.value = '';
//     }
//   };

//   const clearAllData = () => {
//     clearFrontImage();
//     clearBackImage();
//     setResult(null);
//     setUploadProgress(0);
//     toast.info('All data cleared');
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md mt-10 border border-gray-200">
//       <ToastContainer 
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
      
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-700">🆔 Aadhaar OCR Scanner</h1>
//         {(frontImg || backImg || result) && (
//           <button
//             onClick={clearAllData}
//             className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm transition-all duration-200"
//           >
//             🗑️ Clear All
//           </button>
//         )}
//       </div>

//       {/* Security Notice */}
//       <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
//         <div className="flex">
//           <div className="flex-shrink-0">
//             <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <div className="ml-3">
//             <p className="text-sm text-blue-700">
//               <strong>Privacy & Security:</strong> Your Aadhaar images are processed securely and automatically deleted after extraction. 
//               Only the last 4 digits of your Aadhaar number are displayed for security.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Upload Section */}
//         <div className="space-y-6">
//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">
//               Aadhaar Front Image 
//               <span className="text-xs text-gray-500 ml-2">(Max 10MB, JPEG/PNG/WebP)</span>
//             </label>
//             <input
//               ref={frontInputRef}
//               type="file"
//               accept=".jpg,.jpeg,.png,.webp"
//               onChange={(e) => handleFileSelection(e.target.files?.[0] || null, 'front')}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
            
//             {validationErrors.front && (
//               <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200">
//                 ⚠️ {validationErrors.front}
//               </div>
//             )}
            
//             {frontImg && !validationErrors.front && (
//               <div className="mt-3">
//                 <div className="relative">
//                   <img
//                     src={URL.createObjectURL(frontImg)}
//                     alt="Front Preview"
//                     className="rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//                   />
//                   <button
//                     onClick={clearFrontImage}
//                     className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-200"
//                     title="Clear image"
//                   >
//                     ✕
//                   </button>
//                   <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
//                     ✅ Valid
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-700">
//               Aadhaar Back Image 
//               <span className="text-xs text-gray-500 ml-2">(Max 10MB, JPEG/PNG/WebP)</span>
//             </label>
//             <input
//               ref={backInputRef}
//               type="file"
//               accept=".jpg,.jpeg,.png,.webp"
//               onChange={(e) => handleFileSelection(e.target.files?.[0] || null, 'back')}
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
            
//             {validationErrors.back && (
//               <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200">
//                 ⚠️ {validationErrors.back}
//               </div>
//             )}
            
//             {backImg && !validationErrors.back && (
//               <div className="mt-3">
//                 <div className="relative">
//                   <img
//                     src={URL.createObjectURL(backImg)}
//                     alt="Back Preview"
//                     className="rounded-lg border border-gray-300 shadow w-full max-h-64 object-contain"
//                   />
//                   <button
//                     onClick={clearBackImage}
//                     className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all duration-200"
//                     title="Clear image"
//                   >
//                     ✕
//                   </button>
//                   <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
//                     ✅ Valid
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="space-y-3">
//             <button
//               onClick={handleUpload}
//               disabled={loading || !frontImg || !backImg || !!validationErrors.front || !!validationErrors.back}
//               className={`w-full py-3 text-white font-semibold rounded-md shadow-md transition-all duration-300 ${
//                 loading || !frontImg || !backImg || validationErrors.front || validationErrors.back
//                   ? 'bg-gray-400 cursor-not-allowed' 
//                   : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
//               }`}
//             >
//               {loading ? '🔄 Processing Aadhaar...' : '🚀 Parse Aadhaar'}
//             </button>
            
//             {loading && (
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
//                   style={{ width: `${uploadProgress}%` }}
//                 ></div>
//               </div>
//             )}
//           </div>

//           {/* Upload Guidelines */}
//           <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-md">
//             <h3 className="font-semibold mb-2">📋 Upload Guidelines:</h3>
//             <ul className="space-y-1">
//               <li>• Ensure images are clear and well-lit</li>
//               <li>• Avoid shadows or reflections on the card</li>
//               <li>• Use front side (with photo) and back side (with address)</li>
//               <li>• Minimum resolution: 400x250 pixels</li>
//               <li>• Supported formats: JPEG, PNG, WebP</li>
//             </ul>
//           </div>
//         </div>

//         {/* Parsed Data Section */}
//         {result && (
//           <div className="space-y-5 border border-gray-200 bg-white p-6 rounded-md shadow-md">
//             <div className="flex justify-between items-center border-b pb-3">
//               <h2 className="text-2xl font-semibold text-gray-800">✅ Parsed Aadhaar Data</h2>
//               {result.processingTime && (
//                 <span className="text-xs text-gray-500">
//                   Processed in {result.processingTime}ms
//                 </span>
//               )}
//             </div>
            
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <span className="text-gray-500">Aadhaar Number</span>
//                 <div className="font-medium text-gray-800 flex items-center">
//                   {result.aadhaarNumber}
//                   <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
//                     🔒 Masked
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Name</span>
//                 <div className="font-medium text-gray-800">{result.name}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Date of Birth</span>
//                 <div className="font-medium text-gray-800">{result.dob}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Gender</span>
//                 <div className="font-medium text-gray-800">{result.gender}</div>
//               </div>
//               <div className="col-span-2">
//                 <span className="text-gray-500">Address</span>
//                 <div className="font-medium text-gray-800">{result.address}</div>
//               </div>
//               <div>
//                 <span className="text-gray-500">Pincode</span>
//                 <div className="font-medium text-gray-800">{result.pincode}</div>
//               </div>
//             </div>
            
//             {/* Confidence Score (if available) */}
//             {result.confidence && (
//               <div className="mt-4 pt-3 border-t">
//                 <div className="flex items-center justify-between text-xs">
//                   <span className="text-gray-500">Extraction Confidence</span>
//                   <span className={`font-medium ${
//                     result.confidence >= 80 ? 'text-green-600' : 
//                     result.confidence >= 60 ? 'text-yellow-600' : 'text-red-600'
//                   }`}>
//                     {result.confidence}% {result.confidence >= 80 ? '🟢' : result.confidence >= 60 ? '🟡' : '🔴'}
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadForm;


//...........................................last..............................



import { useState, useRef, useCallback } from "react";
import { uploadAadhaarImages } from "../services/ocrService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FileUpload from "./FileUpload";
import ProgressBar from "./ProgressBar";
import ParsedResult from "./ParsedResult";

const UploadForm = () => {
  const [frontImg, setFrontImg] = useState<File | null>(null);
  const [backImg, setBackImg] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [validationErrors, setValidationErrors] = useState<{
    front?: string;
    back?: string;
  }>({});
  const frontInputRef = useRef<HTMLInputElement>(null!);
  const backInputRef = useRef<HTMLInputElement>(null!);

  // File validation constants
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

  // Enhanced file validation
  const validateFile = useCallback((file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 10MB";
    }
    if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
      return "Only JPEG, PNG, and WebP images are allowed";
    }
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      return "Invalid file extension. Use jpg, jpeg, png, or webp";
    }
    if (file.name.includes("../") || file.name.includes("..\\")) {
      return "Invalid file name";
    }
    return null;
  }, []);

  // Image quality validation
  const validateImageQuality = useCallback((file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const img = new Image();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      img.onload = () => {
        if (img.width < 400 || img.height < 250) {
          resolve("Image resolution too low. Minimum 400x250 pixels required");
          return;
        }

        const aspectRatio = img.width / img.height;
        if (aspectRatio < 1.3 || aspectRatio > 2.2) {
          resolve(
            "Image doesn't appear to be a card format. Please upload a proper Aadhaar card image"
          );
          return;
        }

        canvas.width = 100;
        canvas.height = 60;
        ctx?.drawImage(img, 0, 0, 100, 60);

        const imageData = ctx?.getImageData(0, 0, 100, 60);
        if (imageData) {
          const data = imageData.data;
          let brightness = 0;
          for (let i = 0; i < data.length; i += 4) {
            brightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
          }
          brightness = brightness / (data.length / 4);

          if (brightness < 50) {
            resolve("Image is too dark. Please use better lighting");
            return;
          }
          if (brightness > 220) {
            resolve("Image is overexposed. Please reduce lighting");
            return;
          }
        }
        resolve(null);
      };

      img.onerror = () => {
        resolve("Invalid or corrupted image file");
      };

      img.src = URL.createObjectURL(file);
    });
  }, []);

  // Handle file selection
  const handleFileSelection = useCallback(
    async (file: File | null, type: "front" | "back") => {
      if (!file) return;
      setValidationErrors((prev) => ({ ...prev, [type]: undefined }));

      const basicError = validateFile(file);
      if (basicError) {
        setValidationErrors((prev) => ({ ...prev, [type]: basicError }));
        return;
      }

      const qualityError = await validateImageQuality(file);
      if (qualityError) {
        setValidationErrors((prev) => ({ ...prev, [type]: qualityError }));
        return;
      }

      if (type === "front") {
        setFrontImg(file);
      } else {
        setBackImg(file);
      }
    },
    [validateFile, validateImageQuality]
  );

  // Upload handler
  const handleUpload = async () => {
    if (!frontImg || !backImg) {
      toast.error("Please select both Aadhaar images");
      return;
    }
    if (validationErrors.front || validationErrors.back) {
      toast.error("Please fix validation errors before uploading");
      return;
    }

    const formData = new FormData();
    formData.append("adhaarFrontFile", frontImg);
    formData.append("adhaarBackFile", backImg);

    setLoading(true);
    setResult(null);
    setUploadProgress(0);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 10;
      });
    }, 200);

    try {
      const response = await uploadAadhaarImages(formData);
      setUploadProgress(100);
      setResult(response.data);
      toast.success("Aadhaar data extracted successfully!");
    } catch (err: any) {
      console.error("Upload error:", err);
      let errorMessage = "Failed to extract Aadhaar data.";
      if (err?.response?.status === 413) {
        errorMessage = "File size too large. Please use smaller images.";
      } else if (err?.response?.status === 429) {
        errorMessage = "Too many requests. Please wait a moment and try again.";
      } else if (err?.response?.status === 400) {
        errorMessage =
          err?.response?.data?.message ||
          "Invalid Aadhaar images. Please check and try again.";
      } else if (err?.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err?.response?.data?.error) {
        errorMessage = err.response.data.error;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      toast.error(errorMessage);
      setUploadProgress(0);
    } finally {
      clearInterval(progressInterval);
      setLoading(false);
    }
  };

  // Clear helpers
  const clearFrontImage = () => {
    setFrontImg(null);
    setValidationErrors((prev) => ({ ...prev, front: undefined }));
    if (frontInputRef.current) frontInputRef.current.value = "";
  };
  const clearBackImage = () => {
    setBackImg(null);
    setValidationErrors((prev) => ({ ...prev, back: undefined }));
    if (backInputRef.current) backInputRef.current.value = "";
  };
  const clearAllData = () => {
    clearFrontImage();
    clearBackImage();
    setResult(null);
    setUploadProgress(0);
    toast.info("All data cleared");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md mt-10 border border-gray-200">
      <ToastContainer />

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">🆔 Aadhaar OCR Scanner</h1>
        {(frontImg || backImg || result) && (
          <button
            onClick={clearAllData}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm transition-all duration-200"
          >
            🗑️ Clear All
          </button>
        )}
      </div>

      {/* Notice */}
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
        <p className="text-sm text-blue-700">
          <strong>Privacy & Security:</strong> Aadhaar images are processed securely and
          automatically deleted. Only the last 4 digits of your Aadhaar number are shown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <FileUpload
            label="Aadhaar Front Image (Max 10MB, JPEG/PNG/WebP)"
            file={frontImg}
            error={validationErrors.front}
            onFileChange={(file) => handleFileSelection(file, "front")}
            onClear={clearFrontImage}
            inputRef={frontInputRef}
          />

          <FileUpload
            label="Aadhaar Back Image (Max 10MB, JPEG/PNG/WebP)"
            file={backImg}
            error={validationErrors.back}
            onFileChange={(file) => handleFileSelection(file, "back")}
            onClear={clearBackImage}
            inputRef={backInputRef}
          />

          <div className="space-y-3">
            <button
              onClick={handleUpload}
              disabled={
                loading ||
                !frontImg ||
                !backImg ||
                !!validationErrors.front ||
                !!validationErrors.back
              }
              className={`w-full py-3 text-white font-semibold rounded-md shadow-md transition-all duration-300 ${
                loading ||
                !frontImg ||
                !backImg ||
                validationErrors.front ||
                validationErrors.back
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
              }`}
            >
              {loading ? "🔄 Processing Aadhaar..." : "🚀 Parse Aadhaar"}
            </button>

            {loading && <ProgressBar progress={uploadProgress} />}
          </div>

          <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-md">
            <h3 className="font-semibold mb-2">📋 Upload Guidelines:</h3>
            <ul className="space-y-1">
              <li>• Ensure images are clear and well-lit</li>
              <li>• Avoid shadows or reflections on the card</li>
              <li>• Upload both front and back images</li>
              <li>• Minimum resolution: 400x250 pixels</li>
              <li>• Formats: JPEG, PNG, WebP</li>
            </ul>
          </div>
        </div>

        <ParsedResult result={result} />
      </div>
    </div>
  );
};

export default UploadForm;
