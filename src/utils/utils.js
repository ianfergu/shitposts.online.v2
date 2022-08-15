

export const isScreenMobile = () => {
    return window.window.outerWidth <= 768;
};

export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const createLink = () => { 
	var img_start = "https://i.imgur.com/";
	var img_end = ".jpg";
	var img_med= "";
	var i;

	for (i = 0; i < 5; i++) {
		var letter = String.fromCharCode(getRandomArbitrary(97, 122));
		var up = getRandomArbitrary(0, 1);
		if (up >= 0.5) {
			letter = letter.toUpperCase();
		}
	  	img_med = img_med.concat(letter);
	}

	var img = "";
	img = img.concat(img_start, img_med, img_end);
	return img;
};

export const getImgHead = async (tries = 0) => {
	const url = createLink();
	try {
		var response = await fetch(url, {method: 'HEAD', redirect: 'manual'});
	} catch {
		throw console.error("failed to get");
	}

	if (response.status != 200 && tries <= 10) {
		return getImgHead(tries + 1);
	}
	return response.url;
}

export const getSentence = async () => {
	const url = "/shitposts.online.v2/sentencebank.txt"
	const response = await fetch(url, {dataType: 'text'});
	const data = await response.text();
	return printSelective(data);
}

export const printSelective = (data) => {
	var lines = data.split("\n");
	var top = (lines[Math.ceil(getRandomArbitrary(0, 8000))]);
	var bottom = (lines[Math.ceil(getRandomArbitrary(0, 8000))]);

	while ((top.length > 100) || (bottom.length > 100) || (top == "\n") || (bottom == "\n")) {
		var top = (lines[Math.ceil(getRandomArbitrary(0, 8000))]);
		var bottom = (lines[Math.ceil(getRandomArbitrary(0, 8000))]);
	};
	return {
		top: top.toUpperCase(),
		bottom: bottom.toUpperCase()
	};
}