//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBiZWlvOXZXNVd5aC85ek5YZU51c2VsVWZRSXpFUGRsYTBrNlZ6NVZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjA0RGxCbit3aThaMHBZaG9SYktOTndIVVBGSVZsR0NjVmZqa0lCYkdCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSlp4b3B1Sk1vcGU1SUh1SFE3dUF4bkpvSjZSc1VTTkVJemtzcGJOaTJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSDlVMVNVS1JLOWp3VjJ0OWd5bG02UzZ1aStHd3RKTS96V3hwaEhvU1J3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGbURRd2JkQXp2UGpiTFF1QzZsVkxmUWFlTzRkazJTYjBnYU5ZM1V5MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFpdkljbitTTitBYStyTzYyMVBPM055aVJpb2p3TWtMRUVPVmQvQVNVRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFNc1E2K2U2Y1c4Uys1dS9ZTkRBVG4xUWJCajVjSitwVlJVL25xNCszZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHlhU2dCTU5pNmhzMmt5TVBkb01zenlOalZJR2J2aGRhYlE1Z3FLd0NCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY4Z0J0dVNjTUMvazhudmM1ZTNxOHVxWkhqOHBJM0lndWlGdEx6OWNFcGttY3FEYmRjbUtXUEdFemNRbUhpSTFmQlltektsMFUvZmF0V2tXUkhjekJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IjVjeHh5S0ZNVmNpb3Y2b3Z3WHo4ZkE5dS9vZlRaejJ5T2NXZ3A3UEdKeUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ4MTQxNTgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk4NTczNzdBRDBDQ0JFOTE0RkI5OUI0ODNFOTc1QjFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MTk1MTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0ODE0MTU4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MkE4QzMwRkU0NjU5NDRBQzUzREFDMkVDMkJGOTZDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzE5NTE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDgxNDE1ODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREE5QzJCMjlEQkI0MjYyNEM4RjQyNkYxMEU2NjI1MTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTcxOTUxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ4MTQxNTgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyRjUzNUM1RTg1RENBNzIyRTBCNEZDRkY5NTVBNERBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3MTk1MTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ill3WkEwbGQ4VHFpcE1xR3plQjBJdHciLCJwaG9uZUlkIjoiZTRlNjYwZmItOTk4Yy00ZTU5LWE1M2YtZWU4NGQ5NDYwNjdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklmaWNuR1h4MXhEWXpKalZHcFRvMjBlS2M5TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcFU4UTBFeUMyamFyYTlZRXErRlY0bzIzQkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNThYNlQ2WlkiLCJtZSI6eyJpZCI6IjkyMzM0ODE0MTU4MzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhbG1hbiBSYXVmIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM3QrdUFHRU0yc2c3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJT1p1RmRiQU9ZNTFUczVWcnU0U1YybjNpNUVFQlh1NmRZRktuT1ZIalh3PSIsImFjY291bnRTaWduYXR1cmUiOiJ5RG41WUNzWTNaMENCQ2VYUXNzc0YrV0psM1VGdVhrQWM4bVo3cXYzSEIrRkFYRTJsR1JOd1NHbVNPc2ZacVhpc2FERGJnZC92UTllanF2L0NOWkVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHVON0dkNzJHTUx1aFdyKzFZakNiRGJBeGkyd1JyNkRnMC9iT1ZqZmxrdTJOcTNuRXRBTnZ6cHdIeVQ5RnREYmV3ZzdMT3p3WFFSYWFad2EvNjhwQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDgxNDE1ODM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRG1iaFhXd0RtT2RVN09WYTd1RWxkcDk0dVJCQVY3dW5XQlNwemxSNDE4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzE5NTE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBxcCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
