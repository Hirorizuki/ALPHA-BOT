const fs = require('fs')
const chalk = require('chalk')
global.autoTyping = false 
global.autoRecord = false 
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


global.owner = ["6289508021222","6289508021222"] 
global.ownername = "Hiro•Rizuki" 
global.ytname = "YT: AnimeTV" //ur yt chanel name
global.socialm = "IG:https://instagram.com/hiro_rizuki?igshid=YmMyMTA2M2Y=" //ur github or insta name
global.location = "Indonesia, Jatim, Lmh" //ur location

//bot bomdy 
global.ownernomer = ["6289508021222","6289508021222"]//ur number
global.premium = ['6289508021222'] //ur premium number
global.botname = 'Rizz                 ><                LENTOBS'
global.linkz = "https://chat.whatsapp.com/DEPI1IMaPaC4PBpAp2oh00" 
global.websitex = "https://www.facebook.com/profile.php?id=100083431977702" 
global.botscript = 'https://github.com/Hirorizuki' 
global.themeemoji = "♥️" //ur theme emoji
global.packname = "Sticker ©Rizukī" //ur sticker watermark packname
global.author = "Rizz•Bot\n\n\nMenerima Jasa pembuatan Sticker Gratis\n\n\n\n\n\n\n\nKamu Nanya? Cara Buat sticker Gratis?\n\n\n\n\n\n\n\nNih Nomor Own:6289508021222" //ur sticker watermark author
global.wm = "Rizz•Bot" //ur watermark


global.snk = "hallo\n\n sebelum Menggunakan Bot Whatsaap Di Wajibkan Join Grub Official Bot Whatsaap Kamu Berikut link nya https://chat.whatsapp.com/DEPI1IMaPaC4PBpAp2oh00 Jika Tidak Join Group Kamu Tidak Akan Mendapatkan akses Menggunakan Bot kami"
global.paymentowner = "089508021222"
global.dana = "6289508021222"
global.pulsa ="6289508021222"
global.gopay = "6289508021222"


// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Nih Kak Hehehe ><',
    admin: '< ! > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin',
    botAdmin: '< ! > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin',
    premime: '< ! > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
    owner: '< ! > [Anda Bukan Owner Saya -_-] jangan Menggunakan Fitur ini !!!!!!',
    group: '< ! > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!',
    private: '< ! > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat',
    bot: '< ! > Fitur Khusus Bot',
    wait: '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
    linkm: '< ! > Mana Link Nya?',
    endLimit: '< ! > Limit Kamu Telah Habis!! Tunggu jam 12 malam Atau bisa membeli paket Limit',
    nsfw: '< ! > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!',
}

//media target
global.thum = fs.readFileSync("./gambar/maslent.jpg")
global.log0 = fs.readFileSync("./gambar/maslent.jpg") 
global.err4r = fs.readFileSync("./gambar/maslent.jpg") 
global.thumb = fs.readFileSync("./gambar/maslent.jpg") 
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
