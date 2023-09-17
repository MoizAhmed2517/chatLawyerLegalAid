import { Grid, Stack, Typography, Box, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import listItemImage1 from '../../static/listImage/1.png';
import listItemImage2 from '../../static/listImage/2.png';

const mainThemeColor = '#fffb62';
const stepOne = "Find plan that aligns with the specific needs for AI legal chatbot"
const stepTwo = "Regardless of whether your website is built on WordPress, JavaScript, or HTML, our CDN integration allows for effortless integration of an AI chatbot."
const stepThree = "Personalize the theme settings to enhance your user experience, and relish the seamless integration of an AI-driven legal chatbot."

const data = [
    {id: '1', heading: 'Plan for an AI Legal Chatbot', text: stepOne, image: listItemImage1},
    {id: '2', heading: 'AI Chatbot Integration Across Multiple Web Platforms', text: stepTwo, image: listItemImage2},
    {id: '3', heading: 'Theme customization for AI Legal Chatbot', text: stepThree, image: listItemImage1},
]

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 3000); // Change item every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  return (
    <Grid container spacing={2} sx={{ mt: 5 }}>

        <Grid item xs={6}>
        {
            data.map((item, index) => (
            <Box sx={{
                height: 'auto',
                border:  index === currentIndex ? '1px solid #585724' : 'none',
                borderRadius: '5px',
                background: index === currentIndex ? '#080804' : 'transparent',
                boxShadow: index === currentIndex ? '0px 1px 6px 0px rgba(179, 175, 29, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset': 'none',
                transition: index === currentIndex ? 'box-shadow .5s ease-in, border-color .5s ease-in, background-color .5s ease-in, opacity .5s ease-in, filter .5s ease-in' : 'none',
                p: 3,
            }}
            key={item.id}
            >
                <Grid container spacing={1}>
                    <Grid item xs={1.5}>
                        <Box sx={{
                            height: 'auto',
                            width: '40px',
                            border: '1px solid #fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            py: 0.5,
                            borderRadius: '4px',
                        }}>
                            <Typography variant="body" sx={{ fontWeight: 500, fontSize: 16, color: '#fff', font: 'Oxygen' }}>{item.id}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Stack direction="column" spacing={0.2}>
                            <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 450, font: 'Oxygen', WebkitTextFillColor: 'transparent', backgroundImage: `linear-gradient(to top, ${mainThemeColor}, #b1b1b1)`, WebkitBackgroundClip: 'text' }}>
                                {item.heading}
                            </Typography>
                            <Typography variant="body" sx={{ fontWeight: 400, letterSpacing: '0.5px', fontSize: 12, color: '#fff', font: 'Oxygen', textAlign: 'justify' }}>
                                {item.text}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            ))
        }
        </Grid>

        <Grid item xs={6}>
            <Box sx={{ height: 'auto', px: 4}}>
            <img 
                src={data[currentIndex].image} 
                alt="imagelist"  
                style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '500px',
                        transition: 'box-shadow .5s ease-in, border-color .5s ease-in, background-color .5s ease-in, opacity .5s ease-in, filter .5s ease-in'
                    }} 
            />
            </Box>
        </Grid>
    </Grid>
  )
}

export default Carousel