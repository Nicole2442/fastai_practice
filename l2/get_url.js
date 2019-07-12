// download the image's urls from Google Image result page

// ctrl + shift + J: open javascript console in Windows and Linux
// Cmd + Opt + J: open javascript console in Mac

// run the two line code in the console
// before running the command, disable ad blocking extensions (uBlock, AdBlockPlus, etc.) in Chrome. Otherwise windows.open() does not work
urls = Array.from(document.querySelectorAll('.rg_di .rg_meta')).map(el=>JSON.parse(el.textContent).ou);
window.open('data:text/csv;charset=utf-8,' + escape(urls.join('\n')));