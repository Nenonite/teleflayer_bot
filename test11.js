const { S_IFREG } = require('constants');
const { create } = require('domain');
const mineflayer = require('mineflayer')
const TeleBot = require('telebot');
var lastid = 0; //айди чата в который отправляются логи (ставится автоматически, меняется тоже сам, можно не писать вручную, НО тогда при каждом запуске бота надо будет ввести любую команду бота 1 раз в том чате куда вести логи)

var serverip = "IP сервера"; //айпи сервера
var serverport = 25565;
var username = "Nickname";
var version = "1.12.2";
var autojoin = false;

function createMineBot() {

const bot = mineflayer.createBot({
	
	host: serverip,
	port: serverport,
	username: username,
	version: version          
})
let btc = 6000; //курс биткоина если хотите поставить фейк курс

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
const requests = require('request'); 
const rq = require("prequest");
const { TIMEOUT } = require('dns');
const request = require('prequest')
var childProcess = require('child_process');
//апи курса биткоина (закомментируйте если хотите фейк курс)
setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);
//конец апи курса биткоина

function time() { return new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');}
	const tbot = new TeleBot({token:"токен телеграм бота, можно взять у BotFather",usePlugins: ['commandButton']}); //токен телеграм бота который будет отправлять сообщения из майнкрафт в телеграм и обратно
	
	const utils = {
		sp: (int) => {
			int = int.toString();
			return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
		},
		rn: (int, fixed) => {
			if (int === null) return null;
			if (int === 0) return '0';
			fixed = (!fixed || fixed < 0) ? 0 : fixed;
			let b = (int).toPrecision(2).split('e'),
				  k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
				  c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
				  d = c < 0 ? c : Math.abs(c),
				  e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];
	
				e = e.replace(/e/g, '');
				e = e.replace(/\+/g, '');
				e = e.replace(/Infinity/g, ' Бесконечно');
	
			return e;
		},
		gi: (int) => {
			int = int.toString();
	
			let text = ``;
			for (let i = 0; i < int.length; i++)
			{
				text += `${int[i]}&#8419;`;
			}
	
			return text;
		},
		decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
		random: (x, y) => {
			return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
		},
		pick: (array) => {
			return array[utils.random(array.length - 1)];
		}
	}
	
	const fs = require('fs');
	const fetch = require('node-fetch');
	//тут ссылки на файлы с фото бота, которые он сохраняет
	const huy = "./image.jpg"
	const huy1 = "./imageс.jpg"
	const huy2 = "./imagep.jpg"
	const huy3 = "./imagear.jpg"
	const huy4 = "./imagegoat.jpg"
	const huy5 = "./imageload.jpg"
	var test = 0;
	let url = "https://picsum.photos/512/512?random"
	
	async function download() {
	  const response = await fetch(url);
	  const buffer = await response.buffer();
	  fs.writeFile(`./image.jpg`, buffer, () => 
		console.log("saved image.jpg"));
	}
	
	async function downloadс() {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./imageс.jpg`, buffer, () => 
		  console.log("saved imageс.jpg"));
	}
	async function downloadp() {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./imagep.jpg`, buffer, () => 
		  console.log("saved imagep.jpg"));
	}
	
	async function downloadar() {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./imagear.jpg`, buffer, () => 
		  console.log("saved imagear.jpg"));
	}
	async function downloadgoat() {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./imagegoat.jpg`, buffer, () => 
		  console.log("saved imagegoat.jpg"));
	}
	async function downloadload() {
		const response = await fetch(url);
		const buffer = await response.buffer();
		fs.writeFile(`./imageload.jpg`, buffer, () => 
		  console.log("saved imageload.jpg"));
	}
	tbot.on('/sendpicture', (msg) => {lastid = msg.chat.id; url = "https://picsum.photos/512/512?random"; download(); tbot.sendMessage(msg.chat.id, "Подождите..."); tbot.sendPhoto(msg.chat.id, huy)});
	tbot.on('/sendcat', (msg) => {lastid = msg.chat.id; url = "https://thiscatdoesnotexist.com"; downloadс(); tbot.sendMessage(msg.chat.id, "Подождите..."); tbot.sendPhoto(msg.chat.id, huy1)});
	tbot.on('/people', (msg) => {lastid = msg.chat.id; url = "https://thispersondoesnotexist.com/image"; tbot.sendMessage(msg.chat.id, "Подождите..."); downloadp(); tbot.sendPhoto(msg.chat.id, huy2)});
	tbot.on('/sendart', (msg) => {lastid = msg.chat.id; url = "https://thisartworkdoesnotexist.com"; tbot.sendMessage(msg.chat.id, "Подождите..."); downloadar(); tbot.sendPhoto(msg.chat.id, huy3)});
	tbot.on('/sendgoat', (msg) => {lastid = msg.chat.id; url = "https://placegoat.com/720/512"; tbot.sendMessage(msg.chat.id, "Подождите..."); downloadgoat(); tbot.sendPhoto(msg.chat.id, huy4)});
	tbot.on(/^\/sendload (.+)$/, (msg, props)  => {lastid = msg.chat.id; url = props.match[1]; tbot.sendMessage(msg.chat.id, "Подождите..."); downloadload(); tbot.sendPhoto(msg.chat.id, huy5)});
	//мини рулетка
	tbot.on(['/GadgetBox','/GadgetBox 📱','GadjetBox 📱'], (msg) => {
		let random1 = utils.pick(["💻","📱","🖱","⌨","🎙"]);
		let random2 = utils.pick(["💻","📱","🖱","⌨","🎙"]);
		let random3 = utils.pick(["💻","📱","🖱","⌨","🎙"]);
		let random4 = utils.pick(["💻","📱","🖱","⌨","🎙"]);
		const replyMarkup = tbot.inlineKeyboard([
			[
				// First row with command callback button
				tbot.inlineButton('GadgetBox', {callback: 'GadgetBox'})
			]
		]);
		let randcheck = random1+random2+random3+random4
		msg.reply.text(`${randcheck}`, { asReply: true });
		if(randcheck == "💻💻💻💻") return msg.reply.text(`Вы выиграли ноутбук!`, { asReply: true });
		if(randcheck == "📱📱📱📱") return msg.reply.text(`Вы выиграли телефон!`, { asReply: true });
		if(randcheck == "🖱🖱🖱🖱") return msg.reply.text(`Вы выиграли мышку!`, { asReply: true });
		if(randcheck == "⌨⌨⌨⌨") return msg.reply.text(`Вы выиграли клавиатуру!`, { asReply: true });
		if(randcheck == "🎙🎙🎙🎙") return msg.reply.text(`Вы выиграли микрофон!`, { asReply: true });
		lastid = msg.chat.id;
	});
	//💻 📱 🖱 💻
	//GadjetBox 📱
	//настройка бота майнкрафт из телеграма
	tbot.on("/startbot", (msg) => {
		lastid = msg.chat.id
		tbot.sendMessage(lastid,"Бот запускается, подождите...")
		bot.quit()
		tbot.stop()
		setTimeout(createMineBot, 2000)
	});
	tbot.on("/settings", (msg) => {
		lastid = msg.chat.id;
		tbot.sendMessage(lastid, `Текущие настройки бота: Айпи сервера: ${serverip} Порт: ${serverport} Ник: ${username} Версия: ${version}`);
	})
	tbot.on(/^\/setip (.+)$/, (msg, props) => { const text = props.match[1]; 
		lastid = msg.chat.id;
		serverip = text;
		tbot.sendMessage(lastid, `Установлен айпи сервера: ${serverip}`)

	});

	tbot.on(/^\/setport (.+)$/, (msg, props) => { const text = props.match[1]; 
		lastid = msg.chat.id;
		serverport = text;
		serverport = Number(serverport)
		tbot.sendMessage(lastid, `Установлен порт сервера: ${serverport}`)
	});

	tbot.on(/^\/setnick (.+)$/, (msg, props) => { const text = props.match[1]; 
		lastid = msg.chat.id;
		username = text;

		tbot.sendMessage(lastid, `Установлен ник: ${username}`)
	});

	tbot.on(/^\/setversion (.+)$/, (msg, props) => { const text = props.match[1]; 
		lastid = msg.chat.id;
		version = text;

		tbot.sendMessage(lastid, `Установленa версия игры: ${version}`)
	});

	tbot.on('edit', (msg) => { return bot.chat(`${ msg.from.first_name }: ${msg.text} (изменено)`) });
	tbot.on(['/start', '/hello', '/help', 'Старт'], (msg) => {lastid = msg.chat.id; msg.reply.text('Мои команды: /sendpicture - отправляет рандомное красивое фото, /sendcat - отправляет рандомное фото кота, /eval [команда], /people - рандомное фото человека, /testbuttons - тест кнопок, /action, /sendart - арт');});
	//полезная НО опасная функция, так как через нее могут взломать бота, и надо сделать защиту от простых людей
	tbot.on(/^\/eval (.+)$/, (msg, props) => { const text = props.match[1]; 
	lastid = msg.chat.id;
	try {
	const result = eval(props.match[1])
	
	
	if(typeof(result) === 'string')
	{
	return msg.reply.text(`строка: ${result}`);
	} else if(typeof(result) === 'number')
	{
	return msg.reply.text(`число: ${result}`);
	} else {
	return msg.reply.text(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
	}
	} catch (e) {
	console.error(e);
	return msg.reply.text(`ошибка:
	${e.toString()}`);
	}  
	});
	tbot.on('/testbuttons', msg => {
	
		// Inline keyboard markup
		const replyMarkup = tbot.inlineKeyboard([
			[
				// First row with command callback button
				tbot.inlineButton('похуй', {callback: 'pohuy'})
			],
			[
				// Second row with regular command button
				tbot.inlineButton('хуй', {callback: 'huy'})
			]
		]);
	
		// Send message with keyboard markup
		lastid = msg.chat.id;
		return tbot.sendMessage(msg.chat.id, 'сам такая', {replyMarkup});
	
	});
	tbot.on('callbackQuery', (msg) => {
	
		console.log('callbackQuery data:', msg.data);
		if(msg.data == "huy") {
			tbot.sendMessage(lastid, "хуй")
		}
		if(msg.data == "pohuy") {
			tbot.sendMessage(lastid, "сам похуй")
		}
		tbot.answerCallbackQuery(msg.id);
	});
	tbot.on(/^\/action (.+)$/, (msg, props) => { const text = props.match[1]; 
		tbot.sendAction(msg.chat.id, text);
	});
	// tbot.on(/(такая\s)?сам*/, (msg) => {
	//	return tbot.sendMessage(msg.chat.id,`${utils.pick(["Сам такая","Не сам!!","САМ ТАКОЙ!!!","может ты?"])}`)
	//}); 
	tbot.on(/^\/mchat (.+)$/, (msg, props) => { const text = props.match[1]; 
	   lastid = msg.chat.id;
	   bot.chat(`${text}`)
	});
	tbot.on(/^\/login (.+)$/, (msg, props) => { const text = props.match[1]; 
		lastid = msg.chat.id;
		bot.chat(`/l ${text}`)
	 });
	//майнкрафт бот
	bot.on('chat', function (username, message) {
		tbot.sendMessage(lastid, `<${username}> ${message}`)
		  console.log("<"+username+"> "+message)
		  const command = message.split(' ')
		  if (username === bot.username) return
		  if(message.toLowerCase() == "!сам такой") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!сам") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!не ти") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!может ты") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!может ты?") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!самца") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","сам такая","..."])}`)
		  if(message.toLowerCase() == "!а") bot.chat("Б")
		  if(message.toLowerCase() == "!рандомтекст") bot.chat(`${utils.pick(["САМ ТАКОЙ","не ти","может ты?","Сам","самца","Хуй пизда сковорода (с) Костя","ууу повезло повезло","СПИДРАН ПО БОТУ ПОГНАЛИ"])}`)
		  if(message.toLowerCase() == "!какое щас время") bot.chat(`Текущее время по Москве: ${time()}`) 
		  if(message.toLowerCase() == "!курсбитка") bot.chat(`Курс биткоина: ${btc} долларов`)
		  if(message.toLowerCase() == "!спидран по кику погнали") bot.quit()
		  if(message.toLowerCase() == "!игровое время") bot.chat('Текущее игровое время: ' + bot.time.timeOfDay)
		  if(message.toLowerCase() == "!ты тут") bot.chat(`${ utils.pick(['Да, я тут.', 'Я здесь.', 'Что надо?', 'Угу', 'Ну да, тут.', 'Тут, тут.','Нет, я не тут.','Здравствуйте, я бот под именем Тут.','Сам такая','Иди нафиг','Ну да, а что?','Дай мне покупать электричество','Нет, я не тут, я сейчас занят обновлением винды...'])}`)
		  if(message.toLowerCase() == "!моикоординаты") bot.chat(`Я нахожусь на координатах ${bot.entity.position}`)
		  if(message.toLowerCase() == "!помощь") bot.chat("Команды бота: !рандомтекст - текст !ты тут - тоже рандомный текст !курсбитка - курс биткоина в долларах !игровое время - текущее время в игре !какое щас время - текущее время по Москве !eval [текст] - выполнение кода JavaScript !saytext [текст] - бот напишет любой текст")
		  if(message.toLowerCase() == "тест гугла") {
			requests('http://www.artgame.rf.gd', function (error, response, body) {
				bot.chat(`error: ${error}`); // Print the error if one occurred ()
				bot.chat(`statusCode: ${response} ${response.statusCode}`); // Print the response status code if a response was received
				console.log('body:', body);
				bot.chat(`body: ${body}`); // Print the HTML for the Google homepage.
			  });
		  }
		
		switch (true) {
			case /!saytext/.test(message):
				if(/!saytext/i.test(message)) message = message.replace(/!saytext/i, '').trim();
			  bot.chat(`${message}`)
			  break
			case /!eval/.test(message):
				try {
					let fullargs = ""
					if(/!eval/i.test(message)) message = message.replace(/!eval/i, '').trim();
				message = message.replace(/^\S+\s/, "")
		
				console.log(message)
		
				const result = eval(message)
		
		
				if(typeof(result) === 'string')
					{
					return bot.chat(`строка: ${result}`);
					} else if(typeof(result) === 'number')
					{
					return bot.chat(`число: ${result}`);
					} else {
					return bot.chat(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
					}
				} catch (e) {
						console.error(e);
						return bot.chat(`ошибка: ${e.toString()}`);
					}  
					
			case /!cmd/.test(message):
				try {
					let fullargs = ""
					if(/!eval/i.test(message)) message = message.replace(/!eval/i, '').trim();
				message = message.replace(/^\S+\s/, "")
		
				console.log(message)
		
				const result = eval("childProcess.execSync(message).toString();")
		
		
				if(typeof(result) === 'string')
					{
					return bot.chat(`строка: ${result}`);
					} else if(typeof(result) === 'number')
					{
					return bot.chat(`число: ${result}`);
					} else {
					return bot.chat(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
					}
				} catch (e) {
						console.error(e);
						return bot.chat(`ошибка: ${e.toString()}`);
					}  
				 }
		
		})
		// Log errors and kick reasons:
		bot.on('playerJoined', (player) => {
			console.log('\x1b[33m%s\x1b[0m', `${player.username} joined the game`);  
			tbot.sendMessage(lastid, `${player.username} joined the game`)
		})
		bot.on('playerLeft', (player) => {
		  console.log('\x1b[33m%s\x1b[0m', `${player.username} left the game`);  
		  tbot.sendMessage(lastid, `${player.username} left the game`)
		})
		bot.on('kicked', (reason, loggedIn) => {
			console.log(reason, loggedIn);
			var a = reason;
			tbot.sendMessage(`Кикнуло по причине: ${a.text} (если пусто значит смотреть ниже)`);
			tbot.sendMessage(`Кикнуло по причине: ${a.with}`);
			werwerwer();
		})
		bot.on('end', werwerwer)
		bot.on('error', err => console.log(err))
		
		
		function werwerwer() {
			
		
				// Inline keyboard markup
				const replyMarkup = tbot.inlineKeyboard([
					[
						// First row with command callback button
						tbot.inlineButton('Включить', {callback: 'startbot'})
					],
					[
						// Second row with regular command button
						tbot.inlineButton('Настроить', {callback: 'setup'})
					]
				]);
		
			
			tbot.sendMessage(lastid,"Бот выключился, чо делать? Включить бота или перенастроить его?", {replyMarkup})
			tbot.on('callbackQuery', (msg) => {
		
				console.log('callbackQuery data:', msg.data);
				if(msg.data == "startbot") {
					
					tbot.sendMessage(lastid,"Бот запускается, подождите...")
					bot.quit()
					tbot.stop()
					setTimeout(createMineBot, 2000)
				}
				if(msg.data == "setup") {
					tbot.sendMessage(lastid, `Текущие настройки бота: Айпи сервера: ${serverip} Порт: ${serverport} Ник: ${username} Версия: ${version}`)
				}
				tbot.answerCallbackQuery(msg.id);
			});
		}
		
		tbot.on('sticker', (msg) => {
			lastid = msg.chat.id;
			bot.chat(`${ msg.from.first_name }: Стикер`)
			
		});
		tbot.on('photo', (msg) => {
			lastid = msg.chat.id;
			bot.chat(`${ msg.from.first_name }: Фото`)
			
		});  
		tbot.on('video', (msg) => {
			lastid = msg.chat.id;
			bot.chat(`${ msg.from.first_name }: Видео`)
			
		});  
	
	tbot.on('text', (msg) => bot.chat(`${ msg.from.first_name }: ${msg.text}`));
	tbot.start()
}
createMineBot()

