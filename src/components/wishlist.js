
// import { Box, Card, Typography } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// const userName=localStorage.getItem("userName")
// const userEmail=localStorage.getItem("userEmail")
// const userNumber=localStorage.getItem("userNumber")

// function UserDetail() {
//   return (
    
//     <Box className="d-flex justify-content-center" style={{ padding: '20px', margin: '20px', backgroundColor: 'purple', border: '1px solid lightblue' }}>
//       {/* Sidebar-like card */}
//       <Card style={{ width: '240px', margin: '10px', backgroundColor: 'white' }}>
//         <Typography variant="h6" component="div" className='bg-primary py-3 mx-2 my-2' style={{ padding: '20px' }}>
//           Profile Details
//         </Typography>
//       </Card>

//       <Card style={{ flex: '1', margin: '10px', backgroundColor: 'white' }}>
//         <Typography variant="h5" component="div" style={{ padding: '20px' }}>
//        <span className='text-danger'> Profiler Details</span>  
//           <hr></hr>
//         </Typography>
//         {/* Additional content here */}
//         <Box style={{ display: 'flex', flexDirection: 'column', padding: '20px', margin: '30px', border: '1px solid grey' }}>
//           <DetailItem label="Name" value={userName} />
//           <DetailItem label="Registered As" value="Individual" />
//           <DetailItem label="Email" value={userEmail} />
//           <DetailItem label="Mobile Number" value={userNumber} />
//           <DetailItem label="Password" value="Not Show" />
//         </Box>
//       </Card>
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