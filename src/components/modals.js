import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import fire from "../images/fire.png";
import IT from "../images/comp.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Overlay from 'react-overlay-component'
const images = [
  {
    url: fire,
    title: 'Rescue',
    width: '30%',
  }
];
const image = [
  {
    url: IT,
    title: 'IT',
    width: '30%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    const [isOpen, setOverlay]  = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = {
      animate: true,
      //clickDismiss: false
    };
    const [isOpentwo, setOverlaytwo]  = useState(false);
    const closeOverlaytwo = () => setOverlaytwo(false);
    const configstwo = {
      animate: true,
      //clickDismiss: false
    };

  return (
    <Row>
      <Col md='6'>
    <Box justifyContent="center" sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 100, width: '100%' }}
    onClick ={() => {setOverlay(true);}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
            
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </Col>

    <Col md='6'>
    <Box justifyContent="center" sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 100, width: '100%' }}
    onClick ={() => {setOverlaytwo(true);}}>
      {image.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
            
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
            <div style={{textAlign: "center"}}>
              <h2>Rescue Resume </h2>
              <p>Harrison Wyatt Mine Site Emergency Services Officer</p>
<p>
ADVANCED COMMUNICATION SKILLS | RISK ASSESSMENT & REDUCTION | CURRENT 
ADVANCED FIRST AID & CPR CERTIFICATES| TEAMWORK | DETAIL-ORIENATED </p>
<p>
Well-rounded, mature and highly trained defence professional. High level integrity and array of transferable 
skills developed through working in high-risk industries. Highly supportive, loyal team member dedicated to 
working collaboratively towards achieving a zero-harm outcome. Flexible and adaptable to a variety of working 
environments, accustomed to responding rapidly and working long/flexible shifts as required.</p>
<p>
“Harrison Wyatt is a mature, experienced and skilled Emergency Responder who consistently demonstrates 
discipline, judgement and initiative in his current role. Harrison Wyatt has displayed leadership potential and 
would benefit greatly from completing further leadership courses as soon as possible.” Defence Performance 
Review Extracts
</p>
<p>
STRENGTHS AND CAPABILITIES INSIGHT 
• Demonstrated high levels of situational awareness, courage, rapid thinking and ability to respond 
flexibly to changing priorities in high risk, high pressure and fast-paced situations and effectively 
manage and resolve conflict.
• Strong, positive relationship skills in a team environment, with ability to take directions, and 
experienced in directing, informing and communicating effectively in multi-cultural environments and 
the broader community.
• Exceptional safety-first focus for the team and members of the community in inspecting property, 
identifying potential hazards and dangers and complying with all regulatory standards in 
implementing evacuation/emergency response procedures.
• Maintains exceptional physical fitness, resilience and agility, experienced in heat and fatigue 
management and in monitoring both self and others to maintain safety and performance levels.
• Proven ability to apply specialist knowledge and skills, and commitment to ongoing professional and 
personal development and demonstrating the highest level of personal integrity and professionalism.
“Harrison Wyatt has consistently demonstrated his ability and passion in his current role. Harrison Wyatt has 
displayed leadership qualities and knowledge and has been appointed as a Step-up Rescue Team Leader to 
further advance his skills in a leadership role and fill in as a relief when required.” MSS Strategic Medical and 
Rescue performance extract
2
Harrison Wyatt 
CERTIFICATES AND LICENCES
Full history of substantial, transferable and relevant skills available, including:
EDUCATION AND TRAINING:
• Certificate III in Emergency Response & Rescue (RII30719)
• Certificate III in Public Safety (Firefighting and Emergency Operations)
• Certificate II in Public Safety (Firefighting and Emergency Operations)
(Respond to specialist aviation incidents)
• Attainments towards Certificate IV Public Safety (Firefighting and Emergency Operations)
(Supervise Specialist Aviation accident and incident response and control a Level 1 Incident) 
• Certificate II in Security Operations (Security license class 1)
• Drug and Alcohol Tester
• Mining Supervisor – G1, G2, G8 and G9
• HR manual License
• Blue Card
• Aviation response | Hazmat Response | Vertical Rescue | Confined Space Rescue | Road Crash 
Rescue| Provide Advanced First Aid | Provide Advanced Resuscitation | Provide CPR | Operate 
Breathing Apparatus – Open Circuit
DEFENCE QUALIFICATIONS:
• Combat Communications and Radio Operation
• Structural Fire Controller (Team leader)
• Security Clearance – Secret
• Breathing Apparatus Maintenance technician
HONOURS AND AWARDS
• Australian Defence Medal 
• Commonwealth Games Citation 
CAREER HISTORY – Mss Strategic Medical and Rescue 2021 - Current
Emergency Services Officer and step-up Team leader for Strategic medical and rescue based at Saraji Mine in 
central Queensland. Providing immediate onsite emergency response for the Mining and resource sector and 
maintaining skills in accordance with the Coal Mining Safety and Health Act 1999 to ensure the health, safety 
and welfare of workers on site.
• Respond to all mine site emergencies including, Road Accident Rescue (light vehicles, Heavy 
vehicles e.g., Haul trucks, Draglines), vertical (height or depths) and horizontal (confined space) 
extraction, hazmat response and provide urban search and rescue capability.
• Assist the site Health and Safety team to execute a variety of health and safety related projects
3
Harrison Wyatt
AUSTRALIAN ARMY 2016 – 2021
2
nd COMBAT ENGINEER REGIMENT: ROYAL AUSTRALIAN ENGINEERS 
SAPPER | EMERGENCY RESPONDER/COMBAT RESCUE OPERATOR
As an Emergency Responder maintains and employs specialist emergency response skills and equipment to 
provide initial emergency response and first aid to the combat force in order to minimise loss of life, 
destruction of material, capability and environment by accident, fire or hazardous material.
• Control and co-ordinate emergency response operations, provide a deployable emergency response 
service to the deployed force and Special Forces and emergency response service to military 
airfields.
• Respond to aircraft crash and rescue (fixed wing and rotary aircraft), Road Accident Rescue (light 
skin vehicles and armoured), vertical (height or depths) and horizontal (confined space) extraction 
and provide urban search and rescue capability.
• Demonstrate high level teamwork responding to hazardous material incidents in an operational 
environment and assist in Chemical, Biological, Radiological and Nuclear Decontamination operations. 
</p>
<p>REFEREES</p>
<p>John Robinson
Mss: Rescue Team Leader</p>
<p>e: john.robinson8@bhp.com
m: 0424557603</p>
<p>Luke Duffield
Mss: Operations Coordinator</p>
<p>e: SMR.QLD.OPSCO@msssecurity.com.au
m: 0499207470</p>
<p>Daniel Roach
Mss: Operations Coordinator</p>
<p>
e: SMR.QLD.OPSCO@msssecurity.com.au
m: 0499207470
</p>
<p>CHARACTER REFEREES</p>
<p>Angelo Leonardi
Emergency Services Ops Manger
Oil & Gas Upstream / Downstream Support 
Services </p>
<p>e: leonardi835@hotmail.com
m: 0423 522 505</p>
</div>
    </Overlay>
    <Overlay configs={configstwo} isOpen={isOpentwo} closeOverlay={closeOverlaytwo}>
            <div style={{textAlign: "center", color: "black"}}>
              <p>IT resume</p>
            </div>

    </Overlay>
    </Col>
    </Row>
    
  );
}
