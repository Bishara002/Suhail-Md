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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_34_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieVhVS3FJaTRuT2toNnZjQWpnOVVPbERGczFFcnNaSGs4WS92d29KYkxVUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjF2UXJncHhTUnFleUVOT0dqakd5QVwiLFxuICBcInBob25lSWRcIjogXCJkZmRiN2NjNC01YzA1LTRkMjItYjgxYy1lMzkyZTQ0Yjc2ODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA0OSxcbiAgICAgIDgzLFxuICAgICAgMTIsXG4gICAgICAxMDAsXG4gICAgICA3NSxcbiAgICAgIDIzNyxcbiAgICAgIDcyLFxuICAgICAgNCxcbiAgICAgIDI0LFxuICAgICAgNzMsXG4gICAgICAxODQsXG4gICAgICAyNDIsXG4gICAgICAxNDcsXG4gICAgICAyMjcsXG4gICAgICAyNDgsXG4gICAgICAxMDEsXG4gICAgICAzNCxcbiAgICAgIDI5LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgODksXG4gICAgICAxOCxcbiAgICAgIDIsXG4gICAgICAxMzEsXG4gICAgICAyMjUsXG4gICAgICA2OCxcbiAgICAgIDIyMSxcbiAgICAgIDE5NixcbiAgICAgIDExMyxcbiAgICAgIDIsXG4gICAgICA5OSxcbiAgICAgIDE2MixcbiAgICAgIDEzMixcbiAgICAgIDIzMixcbiAgICAgIDE2NyxcbiAgICAgIDg5LFxuICAgICAgNTksXG4gICAgICA4MyxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVRU0E4SjZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI4MzA4MTk0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUHJpbWUgQmlzaGFyYV9KclwiLFxuICAgIFwibGlkXCI6IFwiMTUwMzcxNTAyNzAyNzQ2OjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zMm9NWUZFTkRSMkxVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieU1VYVV1S3dOSjhsdi9takNHZGxRY3V2N3NlRzU4dnJjbWZONEp6M2xDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzRmQzWkI4d295RWxlZkZyWUhHalR4aGVZTHRoYzg0RW45V3VaWXlodHpNSFVzRlRDU0VWRTZXMFptNWg3RnloV2IxTWkxbENHTThlTEhUcGQ2blhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmbU00bGZhOFVzZkF5SkErMFJPdWtzV1ZwaVdNRzh5ZzhRb0dnN2JUdnBqQTc1NitGYSt1Tm5DazdjUytkeVZpTlBjYThlb3RlTEdwY2U0UlhJdVpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI4MzA4MTk0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzIxNDAzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="


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
