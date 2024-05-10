 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Card, Typography, Button } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UserDetail() {
//   const [wishlistDetails, setWishlistDetails] = useState(null);
//   const [profileDetails, setProfileDetails] = useState(null);
//   const [showWishlistDetails, setShowWishlistDetails] = useState(false);

//   useEffect(() => {
//     // Fetch profile details on component mount (optional)
//     fetchProfileDetails();
//   }, []);

//   const fetchProfileDetails = () => {
//     // Fetch profile details from localStorage or an API endpoint
//     const userName = localStorage.getItem("userName");
//     const userEmail = localStorage.getItem("userEmail");
//     const userNumber = localStorage.getItem("userNumber");
//     setProfileDetails({ userName, userEmail, userNumber });
//   };

//   const handleProfileDetailsClick = () => {
//     setShowWishlistDetails(false);
//   };
//   const handleWishlistDetailsClick = () => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       console.error('User ID not found in localStorage.');
//       // Handle the case where userId is not available, such as redirecting to login.
//       return;
//     }
  
//     axios.get(`http://localhost:3002/api/cart?userId=${userId}`)
//       .then(response => {
//         setWishlistDetails(response.data);
//         setProfileDetails(null);
//         setShowWishlistDetails(true);
//       })
//       .catch(error => {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           console.error('Server Error:', error.response.data);
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error('No Response:', error.request);
//         } else {
//           // Something happened in setting up the request that triggered an error
//           console.error('Request Error:', error.message);
//         }
//         console.error('Error Details:', error.config);
//       });
//   };
  
  

//   return (
//     <Box className="d-flex justify-content-center" style={{ padding: '20px', margin: '20px', backgroundColor: 'purple', border: '1px solid lightblue' }}>
//       <Card style={{ width: '240px', margin: '10px', backgroundColor: 'white' }}>
//         <Typography variant="h6" component="div" className='bg-primary py-3 mx-2 my-2' style={{ padding: '20px' }}>
//           <Button variant="primary" type="button" onClick={handleProfileDetailsClick}>
//             Profile Details
//           </Button>
//         </Typography>
//         <Typography variant="h6" component="div" className='bg-light py-3 mx-2 my-2' style={{ padding: '20px' }}>
//           <Button variant="primary" type="button" onClick={handleWishlistDetailsClick}>
//             Wishlist Details
//           </Button>
//         </Typography>
//       </Card>

//       {showWishlistDetails && wishlistDetails && (
//         <Card style={{ flex: '1', margin: '10px', backgroundColor: 'white' }}>
//           <Typography variant="h5" component="div" style={{ padding: '20px' }}>
//             <span className='text-danger'>Wishlist Details</span>  
//             <hr />
//           </Typography>
//           <Box style={{ display: 'flex', flexDirection: 'column', padding: '20px', margin: '30px', border: '1px solid grey' }}>
//             {wishlistDetails.map((item, index) => (
//               <DetailItem key={index} label={item.productName} value={item.quantity} />
//             ))}
//           </Box>
//         </Card>
//       )}

//       {!showWishlistDetails && profileDetails && (
//         <Card style={{ flex: '1', margin: '10px', backgroundColor: 'white' }}>
//           <Typography variant="h5" component="div" style={{ padding: '20px' }}>
//             <span className='text-danger'>Profile Details</span>  
//             <hr />
//           </Typography>
//           <Box style={{ display: 'flex', flexDirection: 'column', padding: '20px', margin: '30px', border: '1px solid grey' }}>
//             <DetailItem label="Name" value={profileDetails.userName} />
//             <DetailItem label="Registered As" value="Individual" />
//             <DetailItem label="Email" value={profileDetails.userEmail} />
//             <DetailItem label="Mobile Number" value={profileDetails.userNumber} />
//             <DetailItem label="Password" value="Not Show" />
//           </Box>
//         </Card>
//       )}
//     </Box>
//   );
// }

// function DetailItem({ label, value }) {
//   return (
//     <Box style={{ display: 'flex', marginBottom: '10px' }}>
//       <Typography variant="body1" style={{ flex: '1', padding: '10px' }}>
//         {label}:
//       </Typography>
//       <Typography variant="body1" style={{ flex: '2', padding: '10px' }}>
//         {value}
//       </Typography>
//     </Box>
//   );
// }

// export default UserDetail;



import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';

const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");
const userNumber = localStorage.getItem("userNumber");

function UserDetail() {
  const [activeView, setActiveView] = useState('profile');
  const [cartItems, setCartItems] = useState([]);

  
   
  


  useEffect(() => {
    if (activeView === 'wishlist') {
      //Retrieve wishlist items specific to the logged-in user
      const storedWishlistItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(storedWishlistItems);
      // fetchWishlistDetails();
    }
  }, [activeView]);
  // const removeItemFromWishlist = async (indexToRemove) => {
    //  const itemToRemove = cartItems[indexToRemove];
  //   const userEmail = localStorage.getItem("userEmail"); // Assuming email is stored in local storage
  //   try {
  //     const response = await fetch('http://localhost:3000/api/wishlist', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: userEmail, itemId: itemToRemove._id }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to update wishlist');
  //     }
  //     const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
  //     setCartItems(updatedCartItems);
  //   } catch (error) {
  //     console.error('Error removing item:', error.message);
  //   }
  // };
  
  const removeItemFromWishlist = (indexToRemove) => {
    const newWishlist = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newWishlist);
   localStorage.removeItem("cartItems");

 

  };
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      p: 2,
      m: 10,
      bgcolor: 'purple',
      border: '1px solid lightblue'
    }}>
      <Card sx={{ width: 240, m: 1, bgcolor: 'white' }}>
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          
        </Typography>
        <Button className='bg-danger' variant="outlined" sx={{ mb: 2, width: '100%' }} onClick={() => setActiveView('profile')}>
          Profile Details
        </Button>
        <Button className='bg-danger' variant="outlined" sx={{ width: '100%' }} onClick={() => setActiveView('wishlist')}>
          Wishlist Details
        </Button>
      </Card>

      {activeView === 'profile' ? (
        <Card sx={{ flex: 1, m: 1, bgcolor: 'white' }}>
          <Typography variant="h5" component="div" sx={{ p: 2 }}>
            Profile Details
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 3, border: "1px solid grey" }}>
             <DetailItem label="Name" value={userName} />
             <DetailItem label="Registered As" value="Individual" />
             <DetailItem label="Email" value={userEmail} />
             <DetailItem label="Mobile Number" value={userNumber}/>
             <DetailItem label="Password" value="Not shown due to security reasons" />
          </Box>
        </Card>
      ) : (
        <Card sx={{ flex: 1, m: 1, bgcolor: 'white' }}>
          <Typography variant="h5" component="div" sx={{ p: 2 }}>
            Wishlist Details
          </Typography>
          <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            {cartItems.map((item, index) => (
              // <Box key={index} sx={{ width: '100%', mb: 2 }}>
              //   <Typography variant="h6">{item.title}</Typography>
              //   <Typography variant="body2">{item.price}</Typography>
              //   <Typography variant="body2">{item.location}</Typography>
              //   <img src={item.image} alt={item.title} style={{ width: '30%', height: 'auto' }} />
              //   <Button variant="outlined" color="error" onClick={() => removeItemFromWishlist(index)}>
              //                 Remove
              //               </Button>
              // </Box>
              <Box key={index} sx={{ width: '100%', mb: 2, bgcolor: 'white', p: 2, boxShadow: 3 }}>
              <Typography variant="h6">{item._id}</Typography>
              <Typography variant="body2">{item.title}</Typography>
              <Typography variant="body2">{item.price}</Typography>
              <Typography variant="body2">{item.location}</Typography>
              <Typography variant="body2">{item.size}</Typography>
              <Typography variant="body2">{item.readytomove}</Typography>

              <Button variant="outlined" className='bg-primary' color="error" onClick={() => removeItemFromWishlist(index)}>
                  DELETE
              </Button>
          </Box> 
                             
                            
            ))}
          </Box>
        </Card>
      )}
    </Box>
  );

  function DetailItem({ label, value }) {
    return (
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Typography variant="body1" sx={{ flex: 1, bgcolor: 'lightgrey', p: 1 }}>
          {label}:
        </Typography>
        <Typography variant="body1" sx={{ flex: 2, p: 1 }}>
          {value}
        </Typography>
      </Box>
    );
  }
}


export default UserDetail;
