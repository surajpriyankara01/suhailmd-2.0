const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_40_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjdqTU01TzhRNUEzMmx2K2VaZFcyOVdQbTRhblg4Y1ljVFBoMzFLTEdGUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwNDk3OTg0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODQzQTA0RDEyMDY2RTYxMzg2QkI0RTRCREExNjJERkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MzI3NjI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImE3TElqV3F1UlhXU1I5NFNzUUJmb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWQ0NDM3MzQtNTVjMy00MDc1LThiNWMtOTNlNDY2YWUzMTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDEwMCxcbiAgICAgIDIwMSxcbiAgICAgIDIzMSxcbiAgICAgIDE4NixcbiAgICAgIDgxLFxuICAgICAgMTUxLFxuICAgICAgMTYxLFxuICAgICAgNzEsXG4gICAgICAyMjksXG4gICAgICA2OSxcbiAgICAgIDEyMCxcbiAgICAgIDQxLFxuICAgICAgMTIzLFxuICAgICAgMjUwLFxuICAgICAgNyxcbiAgICAgIDg5LFxuICAgICAgMTc0LFxuICAgICAgMTcwLFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDE5OCxcbiAgICAgIDEyOCxcbiAgICAgIDMzLFxuICAgICAgMjMxLFxuICAgICAgMzIsXG4gICAgICAxNzIsXG4gICAgICA1LFxuICAgICAgMTQ5LFxuICAgICAgMTY4LFxuICAgICAgMzMsXG4gICAgICAxMTcsXG4gICAgICA1MyxcbiAgICAgIDIxLFxuICAgICAgNDEsXG4gICAgICA5NSxcbiAgICAgIDEyMixcbiAgICAgIDEwMSxcbiAgICAgIDE3MSxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhaVjQ4QjM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwNDk3OTg0Njo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzk4NDg2NzM4MjA3NzM6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCTDRDSyBQNE5USDNSXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSytsNkswRkVNTDYvcm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6elpVUUlFc3hVdGR3V1NKbkFVRjR3SDVyYmNBNEcybWVVUlpYbStMUGdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkEwZHV4WFl5NmNmbG00VnF5amlHc1UvUzNKTkZmakovR01WMU11c3p4RTRXemhXdERKNmdzTlZ4YTV1MUpKSUQ4ODZ3SmFCYjl5YnMwaU44VUNmb0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVpa1N3NXh1MEhYdWFiK3hPTFY4bkFWMFdxOG1rdFZwWElJSG5zMGtVazdKWUZBK3RmMG10UGc2d1ZuclpKTEtaU3IxTHRMbFZvcmpjdnZvN2lLb2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzA0OTc5ODQ2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MzI3NjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2IrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPYisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTT1VEdzlEL0xpVDJXUEQ1SCtZS3hENlZjdjdIckRPd1JNRll0UWNObVVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzgyNTc4MzcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQyNTc0NjQ2NzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
