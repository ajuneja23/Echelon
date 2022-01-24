import React from 'react';
import Navbar from './Navbar';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../index.css';

const Home=()=>{
    return (
        <div>
            <Navbar />
            <div class="font-bold items-center p-2" id="section1">
            <h1 class="text-9xl font-sans text-white px-3 py-2 text-center justify-between transition-opacity" id="section1_1">A <a class="text-violet-500">Transformative</a> Six Week History Summer Camp</h1> 
            <h1 class="mx-1 text-left flex text-white text-lg pt-9">We are a group of top performers at history competitions that wish to increase participation in the history competition community with this summer camp. Over the course of 6 weeks in the summer of 2022, the Echelon team will be offering free sessions to prepare middle school students for history competitions. Sign up today to secure your spot!</h1>
            </div>
            <div class="mt-10">
            <h2 class="text-black text-center font-bold font-sans text-3xl mb-10">Session <a class="text-violet-500">Schedule</a></h2>
            <div class="flex items-center" id="row1">
            <Card variant="outlined" sx={{border:1, width: 1/4, mr: 2}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">1</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: Medieval Indian History
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: June 18
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>

            <Card variant="outlined" sx={{border:1, width: 1/4, mr: 2}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">2</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: Colonial American History
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: June 25
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>

            <Card variant="outlined" sx={{border:1, width: 1/4, }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">3</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: Russian Empire
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: July 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            <div class="flex items-center mb-10" id="row2">
            <Card variant="outlined" sx={{border:1, width: 1/4, mr: 2, mt: 2}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">4</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: World War I
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: July 9
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>

            <Card variant="outlined" sx={{border:1, width: 1/4, mr: 2, mt: 2}}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">5</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: Modern Africa 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: July 16
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>

            <Card variant="outlined" sx={{border:1, width: 1/4, mt: 2 }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={[{fontFamily: "sans-serif"}]} class="text-center">
                <a class="font-bold text-violet-500">Week</a> <a class="font-bold">6</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a class="font-bold text-violet-500">Topic</a>: Modern American History
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Date</a>: July 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a class="font-bold text-violet-500">Time</a>: 11 AM-12:30 PM CST
        </Typography>

                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            </div>
            <div id="faq" >
                <h2 id="faqtitle" class="font-bold font-sans text-3xl text-center mb-7">Frequently Asked <a class="text-violet-500"> Questions</a> </h2>

                <Accordion class= "mt-5">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" fontFamily="sans-serif" fontWeight={'bold'}>
                      How long is the camp?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily="sans-serif">
                    The camp will be 6 weeks long.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion class=" mt-5">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" fontFamily="sans-serif" fontWeight={'bold'}>
                       When will the camp be held?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily="sans-serif">
                    The camp will be held every Saturday for 6 weeks, starting on June 18 and ending on July 23. Each session will start at 11 AM CST, and end at 12:30 PM CST.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion class=" mt-5">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" fontFamily="sans-serif" fontWeight={'bold'}>
                    Where will the camp be held?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily="sans-serif">
                    The camp will be held virtually over Zoom. Registered students will be sent meeting links as the first session nears.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion class=" mt-5">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" fontFamily="sans-serif" fontWeight={'bold'}>
                    Does the camp cost money?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily="sans-serif">
                    Nope! Echelon is completely free.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion class=" mt-5 mb-5">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" fontFamily="sans-serif" fontWeight={'bold'}>
                    What does a typical session look like?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontFamily="sans-serif">
                    Each session will begin with a slideshow presentation on the topic. Then, our team will present 2 tossups, which are paragraph-long questions, on the topic. Then, students will produce their own tossup questions on the topic with the assistance of our team. Students will then read the tossup they wrote, and play the tossups their peers wrote in a buzzer-style game.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Home;

/*                 <h2>How long is the camp?</h2>
                <p>The camp will be 6 weeks long.</p>
                <h2>When will the camp be held?</h2>
                <p>The camp will be held every Saturday for 6 weeks, starting on June 18 and ending on July 23. Each session will start at 11 AM CST, and end at 12:30 PM CST.</p>
                <h2>Where will the camp be held?</h2>
                <p>The camp will be held virtually over Zoom. Links for registered students will be sent as the first session nears.</p>
                <h2>Does the camp cost money?</h2>
                <p>Nope! Echelon is completely free.</p>
                <h2>What does a typical session look like?</h2>
                <pEach session will begin with a slideshow presentation on the topic. Then, our team will present 2 tossups, which are paragraph-long questions, on the topic. Then, students will produce their own tossup questions on the topic with the assistance of our team. Students will then read the tossup they wrote, and play the tossups their peers wrote in a buzzer-style game.</p> */