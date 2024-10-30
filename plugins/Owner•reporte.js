let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '⚠ *_️Ingrese el error ue desea reportar._*'
    if (text.length < 10) throw '⚠️ *_Especifique bien el error, mínimo 10 caracteres._*'
    if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar el error._*'
    const teks = `╭───────────────────\n│⊷〘 *R E P O R T E* 🤍 〙⊷\n├───────────────────\n│⁖🧡꙰  *Cliente:*\n│✏️ Wa.me/${m.sender.split`@`[0]}\n│\n│⁖💚꙰  *Mensaje:*\n│📩 ${text}\n╰───────────────────`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
}, 3000 * i)
await conn.sendMessage(global.channelid, { text: m.quoted ? teks + m.quoted.text : teks, contextInfo: {
externalAdReply: {
title: "⚠️ COMANDO FALLIDO ⚠️",
body: '🧋 Un comando con fallas.',
thumbnailUrl: icons,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })

    m.reply('⚠️ *_El reporte se envío a mi creador, cualquier informe falso puede ocasionar baneo._*')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = ['reporte', 'report', 'reportar', 'bug', 'error']

export default handler