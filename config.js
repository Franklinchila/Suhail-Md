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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769609996";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVh5OVJhQ0FGSmgwV2EzL0Y1OUo2UzhCVW5tK1liekdZb2RKZ0Y5WktVdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidS11OGZSV0hUZnlsVlZJSDJ4c21Cd1wiLFxuICBcInBob25lSWRcIjogXCJjNTBlNzkwMS0yMmMwLTRjZWYtOTZlNC1jOGQ3MmIxOTU5ZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxODIsXG4gICAgICAyMjcsXG4gICAgICAxNSxcbiAgICAgIDk4LFxuICAgICAgMjAyLFxuICAgICAgMTQwLFxuICAgICAgMjEzLFxuICAgICAgMjM2LFxuICAgICAgMjMyLFxuICAgICAgMTQ3LFxuICAgICAgMjE0LFxuICAgICAgNzksXG4gICAgICAyMDQsXG4gICAgICAxNzYsXG4gICAgICAxNDAsXG4gICAgICA0NCxcbiAgICAgIDI0NSxcbiAgICAgIDIwMSxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEwOCxcbiAgICAgIDYzLFxuICAgICAgODgsXG4gICAgICAzNCxcbiAgICAgIDMxLFxuICAgICAgNDQsXG4gICAgICAxMyxcbiAgICAgIDEwOCxcbiAgICAgIDIzNixcbiAgICAgIDM0LFxuICAgICAgMTYxLFxuICAgICAgMjUwLFxuICAgICAgOTksXG4gICAgICA0MSxcbiAgICAgIDkzLFxuICAgICAgMTIyLFxuICAgICAgMTEzLFxuICAgICAgNzAsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXRTVQWkxINlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5NjA5OTk2OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjM2MDkzMjY2NzUwODoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV2crcnNIRVB6Sno3TUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkkvVDV6Q25pWS9kb0FQRTFHSWxxMkF3R3oxZFg4UHB0N3BKV3J1UkZBd3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHAzS1hTN3JmZll2dTRnMlA5NSswbzFmSUx0QlBoQ0Zod3pKR01iODh2N3ErTTUyRW1qZVJURHMyNzdzVGZYSUdxenNSSWVmTWkxa3FjUjNQYjFKQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDhVYTlnTFFIZEovTkp5SGFMMHI2cXhFazJ0ck1rOVRobFhuMW1hRnV0WDlkeVRlQkJ6b09LaDY4d05La1gvZW9UcHcwYXZUVFZvUDJNUldNd0kwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY5NjA5OTk2OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODg3MTI5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtPYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS09iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEVuR2dLYVVyUFdsTWFHVjdZalZFU3g3VmIxQzVObDlaUFlPY2ErQ0NDZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA0NzgzMjE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
