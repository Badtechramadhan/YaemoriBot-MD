let handler = async (m, { conn, text, usedPrefix, command, isOwner, isAdmin, isROwner }) => {
if (!(isOwner || isAdmin || isROwner)) {
conn.reply(m.chat, "🚩 Losiento no puedes personalizar el autoresponder en este grupo/chat.", m, rcanal)
}
const chatData = global.db.data.chats[m.chat]
if (text) {
if (chatData.sAutoresponder) return conn.reply(m.chat, `⚠️ Ya hay un prompt en uso, si quieres configurar otro escribe: #autoresponder, hazlo sin texto.`, m, rcanal)

chatData.sAutoresponder = text
conn.reply(m.chat, `🚩 Configuración con éxito.\n\n☁️ Si el autoresponder está desactivado activalo usando:\n> » ${usedPrefix}on autoresponder`, m, rcanal)
} else {
if (chatData.sAutoresponder) {
chatData.sAutoresponder = ''
conn.reply(m.chat, "🗑️ *Prompt borrado con éxito.*", m, fake)
} else {
conn.reply(m.chat, `⚠️ No hay Prompt personalizado en este chat.\n\n🪐 Puedes perzonalizar el autoresponder usando:\n> » ${usedPrefix}editautoresponder + texto que quieres que lo interactúe.`, m)
}}
}

handler.command = ['editautoresponder', 'autoresponder']
export default handler