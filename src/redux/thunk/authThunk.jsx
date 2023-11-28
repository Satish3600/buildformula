// import axios from "axios"
// import { setRegisterResponse, setUserValue } from "../slice/authSlice";

// export const registerThunk  = (
//     registerPayload ,
//     navigate 
//   ) => {
//     return async (dispatch , getState ) => {
    

//         const formData = new FormData();

//         formData.append('first_name', registerPayload.first_name);
//         formData.append('last_name', registerPayload.last_name);
//         formData.append('city', registerPayload.city);
//         formData.append('phone', registerPayload.phone);
//         formData.append('email', registerPayload.email);
//         formData.append('profile_image', registerPayload.profile_image);

//      dispatch(setIsRegisterLoading(true));

//       try {   
//         const response = await axios.post("http://110.227.208.185/api/practical_2/register", formData , {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         const data = response?.data
//         dispatch(setUserValue(data));
//         dispatch(setIsRegisterLoading(false));
//         navigate("/");

//       } catch (e) {
//         dispatch(setRegisterResponse(e.response));
//         dispatch(setIsRegisterLoading(false));
//       }
//     };
//   };
  