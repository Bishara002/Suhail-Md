const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349128308194";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwZElnTFhoWnJXQzdyYUhrcnBubHlERnU1dk4vTGlYMS9jdVRmQmFMR0o0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJscVZoRzBRelFpR3kwSUc3b2RCQjVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJiZTE3NmI5LWU1OWItNDU4ZC1hOGE2LTI3NjhiYmRjMjZhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMTUsXG4gICAgICAyNDMsXG4gICAgICAxMDUsXG4gICAgICAxOTYsXG4gICAgICAxOTYsXG4gICAgICAzNyxcbiAgICAgIDExMCxcbiAgICAgIDI0MSxcbiAgICAgIDIwMCxcbiAgICAgIDE2MCxcbiAgICAgIDE4NSxcbiAgICAgIDEyNSxcbiAgICAgIDEwLFxuICAgICAgMTg4LFxuICAgICAgMjU0LFxuICAgICAgMTcsXG4gICAgICAxNDYsXG4gICAgICAyMTYsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTE1LFxuICAgICAgMzEsXG4gICAgICAyMzIsXG4gICAgICAxOTIsXG4gICAgICAxMixcbiAgICAgIDk1LFxuICAgICAgMjU1LFxuICAgICAgMjI5LFxuICAgICAgNDQsXG4gICAgICAxNDksXG4gICAgICA5NixcbiAgICAgIDE3MSxcbiAgICAgIDUxLFxuICAgICAgMTA5LFxuICAgICAgMTc2LFxuICAgICAgMjE1LFxuICAgICAgODIsXG4gICAgICAxNTUsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1daR1hNTUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjgzMDgxOTQ6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcmltZSBCaXNoYXJhX0pyXCIsXG4gICAgXCJsaWRcIjogXCIxNTAzNzE1MDI3MDI3NDY6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXYyb01ZRkVOWEloYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5TVVhVXVLd05KOGx2L21qQ0dkbFFjdXY3c2VHNTh2cmNtZk40SnozbENVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlEMi9ZUGNMNmRIbVhObGk0emVXUVhsQlcrM05oL2hQRk5FSUtyOEVKc0RTaGtXdHIzMFlXVXV3cGhBRU1rTHQ4dVNpSUNSb0VYekYrZWVLSDZwbkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR5a3ZwYUU5NHE3cCtEbmZITHFlcmhLQmRPTElYRG5YMnJkcHZZNUl4a0Zya3NKNkIrWGMzZHN2TWZ1K0l4eXAxS2ZPQ3QzMUl4emliYTFkMW5DNEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjgzMDgxOTQ6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODUzMDE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "prime Bishara",
  packname: process.env.PACK_NAME || "prime Bishara",
  botname : process.env.BOT_NAME  || "prime Bishara",
  ownername:process.env.OWNER_NAME|| "prime Bishara",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
