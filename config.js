import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['94743747913', '𝐃𝐀𝐌𝐈𝐑𝐔 S𝔞𝔫𝔦', true], 
  ['233208179431', 'Abraham Dwamena', true],
  ['923184070915', '𝙎𝘼𝙇𝙈𝘼𝙉 𝘼𝙃𝙈𝘼𝘿 -(𝘼𝙝𝙢𝙢𝙞)', true], 
  ['94789481495', '𝙼𝚉𝙽 𝙺𝙸𝙽𝙶 ⚡', true],
  ['233533763772', 'Abraham Dwamena2', true],
  ['233531910067', 'Abraham Dwamena3', true],
  
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['94714115809', '94789481495', '923184474176','233531910067','233208179431'] 
global.prems = ['94714115809','233208179431','94789481495', '918360234087','233531910067']
global.allowed = ['94714115809', '94743747913', '94789481495', '918360234087','233531910067']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝑸𝒖𝒆𝒆𝒏 -- ᴋɪᴛᴛʏ'
global.premium = 'true'
global.packname = 'Queen TEAM' 
global.author = '@𝑺𝒆𝒆𝒌𝒆𝒓' 
global.menuvid = 'https://telegra.ph/file/24c39b733490234661993.jpg'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaJgHDB1t90b7wH2Lz3m\n' 
global.dygp = 'https://chat.whatsapp.com/KUaPdfu5YtB1E5ZOrXEcSg'
global.fgsc = 'https://github.com/xdamirubot' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'Queen.jpg' 
global.thumb = fs.readFileSync('./QUEEN.jpg')


global.wait = '*🕣 _QUEEN_KITTY IS LODIND..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
