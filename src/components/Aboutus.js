import React from 'react';
import Navbar from './Navbar';
import '../index.css';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Aboutus=()=>{
    return (
        <div>
            <Navbar />
            
            <div id="mission" class="py-2">
            <h2 id="missiontitle" class="text-center text-3xl font-sans font-bold text-white"> The <a class="text-violet-500">Mission</a></h2>
            <p class="text-white text-lg font-sans font-bold mx-1">The mission of Echelon Summer Camp is to increase participation and excitement in history competitions through a free summer enrichment program for students in 5th to 8th grade.</p>
            </div>
            <div id="team">
            <h2 id="sectionteamtitle" class="text-3xl text-center font-bold font-sans">Our <a class="text-violet-500">Team</a></h2>
            <div id="row1" class="flex items-center ml-12 mt-2 mb-2">
            <div id="aadit">
                <Card variant="outlined" sx={{border:1, width: .82, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Aadit Juneja</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Executive Director</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> place at United States Academic Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">5th</a> at MSNCT 2019</li>
                        <li><a class="text-violet-500 font-bold">5th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Aadit is a junior at Adlai E. Stevenson High School. He started his involvement in history competitions when he was in 7th grader, and avidly participates at local and national competitions. Outside of history, Aadit enjoys baking, math, and listening to music.
                    </Typography>
                    </div>
                </Card>
            </div>
            <br></br>
            <div id="vishal">
                <Card variant="outlined" sx={{border:1, width: .851, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Vishal Rameshbabu</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">President</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> place Solo Team at National History Bowl 2020</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National Political Science Bee 2020</li>
                        <li><a class="text-violet-500 font-bold">3rd</a> at International Geography Bee 2020</li> 
                        </ul> <br></br>
                        Vishal is a junior at James Clemens High School. Vishal has been a historical scholar since elementary school, taking college history classes at his local university in the 5th grade. Outside of history, Vishal likes composing music, cooking, and dancing.
                    </Typography>
                    </div>
                </Card>
            </div>
            <div id="simon">
            <Card variant="outlined" sx={{border:1, width: .755, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Simon Emmanuel</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Operations</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        {/* National History Bowl 2021 Online B Set */}
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> at National History Bowl 2021 Online B Set</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National US History Bee 2021</li>
                        <li><a class="text-violet-500 font-bold">4th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Simon is a junior at East Brunswick High School. Simon has participated in history tournaments since 7th grade, placing high regionally and nationally. Aside from history competitions, Simon enjoys swimming, watching many sports, listening to music, talking to others, and playing games.
                    </Typography>
                    </div>
                </Card>
            </div>
            </div>
            <div id="row2" class="flex items-center ml-12 mt-2 mb-2">
            <div id="steven">
                <Card variant="outlined" sx={{border:1, width: .792, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Steven Tian</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Outreach</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans">
                        <ul>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bowl 2021 B Set Online</li>
                        <li><a class="text-violet-500 font-bold">13th</a> at National History Bee 2021</li>
                        <li><a class="text-violet-500 font-bold">14th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Steven is currently a sophomore at Morgantown High School. Though relatively new to history tournaments, he eagerly competes in tournaments at both local and national levels. When not focusing on history, Steven likes tennis, reading comics, and playing TF2.
                    </Typography>
                    </div>
                </Card>
            </div>
            <br></br>
            <div id="daniel">
                <Card variant="outlined" sx={{border:1, width: .84, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Daniel Figueroa</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Content</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> at National History Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bee 2020</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Daniel is a sophomore at Ransom Everglades School. Daniel has participated in history tournaments since 6th grade, regularly placing highly at regionals and nationals. Outside of history, Daniel enjoys listening to music, mountain biking, and cinema.
                    </Typography>
                    </div>
                </Card>
            </div>
            <div id="nate">
            <Card variant="outlined" sx={{border:1, width: .79, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Nathaniel Kang</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Education</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        {/* National History Bowl 2021 Online B Set */}
                        <ul>
                        <li><a class="text-violet-500 font-bold">7th</a> at National US History Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">1st</a> at National Sports and Entertainment Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">1st</a> at National Sports and Entertainment Bee 2018</li> 
                        </ul> <br></br>
                        Nathaniel is a senior at St. Margaret's Episcopal School in California. Nathaniel has participated in history tournaments since 5th grade, and often wins  SoCal regional history tournaments. Outside of history competitions, Nate enjoys baseball, traveling, and all things music.

                    </Typography>
                    </div>
                </Card>
            </div>
            </div>
            </div>
        </div>
    );
};
export default Aboutus;

/* <div>
            <Navbar />
            
            <div id="mission" class="py-2">
            <h2 id="missiontitle" class="text-center text-3xl font-sans font-bold text-white"> The <a class="text-violet-500">Mission</a></h2>
            <p class="text-white text-lg font-sans font-bold mx-1">The mission of Echelon Summer Camp is to increase participation and excitement in history competitions through a free summer enrichment program for students in 5th to 8th grade.</p>
            </div>
            <div id="team">
            <h2 id="sectionteamtitle" class="text-3xl text-center font-bold font-sans">Our <a class="text-violet-500">Team</a></h2>
            <div id="row1" class="flex items-center ml-12 mt-2 mb-2">
            <div id="aadit">
                <Card variant="outlined" sx={{border:1, width: .82, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Aadit Juneja</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Executive Director</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> place at United States Academic Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">5th</a> at MSNCT 2019</li>
                        <li><a class="text-violet-500 font-bold">5th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Aadit is a junior at Adlai E. Stevenson High School. He started his involvement in history competitions when he was in 7th grader, and avidly participates at local and national competitions. Outside of history, Aadit enjoys baking, math, and listening to music.
                    </Typography>
                    </div>
                </Card>
            </div>
            <br></br>
            <div id="vishal">
                <Card variant="outlined" sx={{border:1, width: .85, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Vishal Rameshbabu</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">President</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> place Solo Team at National History Bowl 2020</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National Political Science Bee 2020</li>
                        <li><a class="text-violet-500 font-bold">3rd</a> at International Geography Bee 2020</li> 
                        </ul> <br></br>
                        Vishal is a junior at James Clemens High School. Vishal has been a historical scholar since elementary school, taking college history classes at his local university in the 5th grade. Outside of history, Vishal likes composing music, cooking, and dancing.
                    </Typography>
                    </div>
                </Card>
            </div>
            <div id="simon">
            <Card variant="outlined" sx={{border:1, width: .755, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Simon Emmanuel</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Operations</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        {/* National History Bowl 2021 Online B Set 
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> at National History Bowl 2021 Online B Set</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National US History Bee 2021</li>
                        <li><a class="text-violet-500 font-bold">4th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Simon is a junior at East Brunswick High School. Simon has participated in history tournaments since 7th grade, placing high regionally and nationally. Aside from history competitions, Simon enjoys swimming, watching many sports, listening to music, talking to others, and playing games.
                    </Typography>
                    </div>
                </Card>
            </div>
            </div>
            <div id="row2" class="flex items-center ml-12 mt-2 mb-2">
            <div id="steven">
                <Card variant="outlined" sx={{border:1, width: .792, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Steven Tian</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Outreach</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans">
                        <ul>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bowl 2021 B Set Online</li>
                        <li><a class="text-violet-500 font-bold">13th</a> at National History Bee 2021</li>
                        <li><a class="text-violet-500 font-bold">14th</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Steven is currently a sophomore at Morgantown High School. Though relatively new to history tournaments, he eagerly competes in tournaments at both local and national levels. When not focusing on history, Steven likes tennis, reading comics, and playing TF2.
                    </Typography>
                    </div>
                </Card>
            </div>
            <br></br>
            <div id="daniel">
                <Card variant="outlined" sx={{border:1, width: .84, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Daniel Figueroa</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Content</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        <ul>
                        <li><a class="text-violet-500 font-bold">1st</a> at National History Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bee 2020</li>
                        <li><a class="text-violet-500 font-bold">2nd</a> at National History Bowl 2021</li> 
                        </ul> <br></br>
                        Daniel is a sophomore at Ransom Everglades School. Daniel has participated in history tournaments since 6th grade, regularly placing highly at regionals and nationals. Outside of history, Daniel enjoys listening to music, mountain biking, and cinema.
                    </Typography>
                    </div>
                </Card>
            </div>
            <div id="nate">
            <Card variant="outlined" sx={{border:1, width: .79, mr: 2, ml: 1}}>
                    <Typography variant="h4" class="text-violet-500 font-sans font-bold ml-1">Nathaniel Kang</Typography>
                    <Typography variant="h4" class="font-sans italic ml-1">Director of Education</Typography>
                    <div class="ml-1 mb-5"> <br></br>
                    <Typography class="text-sm font-sans mr-1">
                        {/* National History Bowl 2021 Online B Set 
                        <ul>
                        <li><a class="text-violet-500 font-bold">7th</a> at National US History Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">1st</a> at National Sports and Entertainment Bee 2019</li>
                        <li><a class="text-violet-500 font-bold">1st</a> at National Sports and Entertainment Bee 2018</li> 
                        </ul> <br></br>
                        Nathaniel is a senior at St. Margaret's Episcopal School in California. Nathaniel has participated in history tournaments since 5th grade, and often wins  SoCal regional history tournaments. Outside of history competitions, Nate enjoys baseball, traveling, and all things music.

                    </Typography>
                    </div>
                </Card>
            </div>
            </div>
            </div>
        </div> */