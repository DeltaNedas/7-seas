// Prevent event handling multiple times
if (!this.global.sevenSeas) {
	this.global.sevenSeas = true;

	const pirates = /CODEX|IGGGAMES/;

	const yarr = player => {
		print("player " + player)
		if (player.name.match(pirates)) {
			Call.sendChatMessage("actual retard pirating a free game");
		}
	};

	Events.on(EventType.WorldLoadEvent, run(e => {
		// Players are added shortly after loading
		Time.run(60, run(() => {
			const players = Vars.playerGroup.all();
			players.each(cons(yarr));
		}));
	}));
	Events.on(EventType.PlayerJoinEvent, run(e => {
		print("Event " + e)
		yarr(e.player);
	}));
}
