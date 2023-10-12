import { Box, Typography, Button, Tooltip } from '@mui/material'
import React, {useState} from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ProfilePic from '../../static/emoji/profilePic.webp'
// import { toast } from 'react-toastify';

const ProfilePic = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [profileImage, setProfileImage] = useState(ProfilePic);
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
          const fileType = file.type;
          if (fileType === 'image/jpeg' || fileType === 'image/png') {
            // It's a valid image file (JPEG or PNG)
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
          } else {
            // toast('Invalid image type', { type: ["error"] });
            console.log("error")
          }
      }
    }
    
    return (
      <Box sx={{
          borderRadius: '50%',
          border: '1px solid #ccc',
          background: '#fff',
          height: '150px',
          width: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${[profileImage]})`,
          backgroundSize: 'cover', // Fit the background image within the circle
          backgroundPosition: 'center center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
          {isHovered && ( // Render the button only when isHovered is true
          <Button
            component="label"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          >
            <Tooltip title="Upload Image">
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CameraAltIcon sx={{ color: '#fff', height: 40, width: 40, opacity: 1, zIndex: 1 }} />
              </Box>
            </Tooltip>
            <input hidden accept='.jpg, .jpeg, .png' type='file' onChange={handleFileUpload} />
          </Button>
        )}
      </Box>
    )
}

export default ProfilePic