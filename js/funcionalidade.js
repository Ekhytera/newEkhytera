const games = [
    {
        name: 'fortnite',
        minHardware: {
            GPU: {
                model: 'Intel HD 4000',
                rating: 51,
            },
            CPU: {
                model: 'Intel Core i3-3225',
                rating: 51,
                socket: 'LGA 1155',
            },
            RAM: 8,
        },
        recHardware: {
            GPU: {
                model: 'GTX 960',
                rating: 62,
            },
            CPU: {
                model: 'Intel Core i5-7300U',
                rating: 54,
            },
            RAM: 16,
        },
    },
    {
        name: 'valorant',
        minHardware: {
            GPU: {
                model: 'Intel HD 4000',
                rating: 51,
            },
            CPU: {
                model: 'Intel Core 2 Duo E8400',
                rating: 53,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'Geforce GT 730',
                rating: 54,
            },
            CPU: {
                model: 'Intel Core i3-4150',
                rating: 53,
            },
            RAM: 4,
        },
    },
    {
        name: 'cs2',
        minHardware: {
            GPU: {
                model: 'GTX 1060',
                rating: 67,
            },
            CPU: {
                model: 'Intel Core i5 2500k',
                rating: 76,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'RTX 2070',
                rating: 68,
            },
            CPU: {
                model: 'Intel Core i7 9700k',
                rating: 92,
            },
            RAM: 16,
        },
    },
    {
        name: 'lol',
        minHardware: {
            GPU: {
                model: 'GeForce 9600GT',
                rating: 53,
            },
            CPU: {
                model: 'Intel Core i3-530',
                rating: 51,
            },
            RAM: 2,
        },
        recHardware: {
            GPU: {
                model: 'GeForce 560',
                rating: 53,
            },
            CPU: {
                model: 'Intel Core i5 3330',
                rating: 54,
            },
            RAM: 4,
        },
    },
    {
        name: 'gtaV',
        minHardware: {
            GPU: {
                model: 'GeForce 9800 GT',
                rating: 52,
            },
            CPU: {
                model: 'Core 2 Quad Q6600',
                rating: 56,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'NVidia GTX 660',
                rating: 54,
            },
            CPU: {
                model: 'Intel Core i5 3470',
                rating: 56,
            },
            RAM: 8,
        },
    },
    {
        name: 'hollowknight',
        minHardware: {
            GPU: {
                model: 'GeForce 9800GTX',
                rating: 52,
            },
            CPU: {
                model: 'Pentium E5200',
                rating: 51,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'GeForce GTX 560',
                rating: 53,
            },
            CPU: {
                model: 'Intel Core i5 750',
                rating: 54,
            },
            RAM: 8,
        },
    },
    {
        name: 'minecraft',
        minHardware: {
            GPU: {
                model: 'Intel HD Graphics 4000',
                rating: 51,
            },
            CPU: {
                model: 'Intel Core i3-3210',
                rating: 51,
            },
            RAM: 2,
        },
        recHardware: {
            GPU: {
                model: 'GeForce GTX 750',
                rating: 55,
            },
            CPU: {
                model: 'Intel Core i5-4690',
                rating: 54,
            },
            RAM: 4,
        },
    },
    {
        name: 'nfs',
        minHardware: {
            GPU: {
                model: 'GeForce GTX 760',
                rating: 55,
            },
            CPU: {
                model: 'Core i5-3570',
                rating: 57,
            },
            RAM: 8,
        },
        recHardware: {
            GPU: {
                model: 'GeForce GTX 1060',
                rating: 66,
            },
            CPU: {
                model: 'Core i7-4790',
                rating: 61,
            },
            RAM: 4,
        },
    },
    {
        name: 'rdr2',
        minHardware: {
            GPU: {
                model: 'GTX 770',
                rating: 56,
            },
            CPU: {
                model: 'Core i5-2500k',
                rating: 76,
            },
            RAM: 8,
        },
        recHardware: {
            GPU: {
                model: 'GeForce GTX 1060',
                rating: 66,
            },
            CPU: {
                model: 'Core i7-4770',
                rating: 56,
            },
            RAM: 12,
        },
    },
    {
        name: 'rdr2',
        minHardware: {
            GPU: {
                model: 'GTX 770',
                rating: 56,
            },
            CPU: {
                model: 'Core i5-2500k',
                rating: 76,
            },
            RAM: 8,
        },
        recHardware: {
            GPU: {
                model: 'GeForce GTX 1060',
                rating: 66,
            },
            CPU: {
                model: 'Core i7-4770',
                rating: 56,
            },
            RAM: 12,
        },
    },
    {
        name: 'roblox',
        minHardware: {
            GPU: {
                model: 'AMD Radeon 9500',
                rating: 50,
            },
            CPU: {
                model: 'Intel Celeron 430',
                rating: 50,
            },
            RAM: 1,
        },
        recHardware: {
            GPU: {
                model: 'AMD Radeon R7 240',
                rating: 54,
            },
            CPU: {
                model: 'Core i3-2120',
                rating: 53,
            },
            RAM: 4,
        },
    },
    {
        name: 'rleague',
        minHardware: {
            GPU: {
                model: 'GeForce GTX 760',
                rating: 55,
            },
            CPU: {
                model: 'Pentium E5200',
                rating: 51,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'Geforce GTX 1060',
                rating: 66,
            },
            CPU: {
                model: 'Core i3-3330',
                rating: 54,
            },
            RAM: 8,
        },
    },
    {
        name: 'thesims4',
        minHardware: {
            GPU: {
                model: 'GeForce 6600',
                rating: 50,
            },
            CPU: {
                model: 'Intel Core i3-3220',
                rating: 53,
            },
            RAM: 4,
        },
        recHardware: {
            GPU: {
                model: 'GTX 650',
                rating: 53,
            },
            CPU: {
                model: 'Core i3-3330',
                rating: 54,
            },
            RAM: 8,
        },
    },
];

const fortnite = games.find(game => game.name === 'fortnite');
const valorant = games.find(game => game.name === 'valorant');
const cs2 = games.find(game => game.name === 'cs2');
const lol = games.find(game => game.name === 'lol');
const gtaV = games.find(game => game.name === 'gtaV');
const hknight = games.find(game => game.name === 'hollowknight');
const minecraft = games.find(game => game.name === 'minecraft');
const nfs = games.find(game => game.name === 'nfs');
const rdr2 = games.find(game => game.name === 'rdr2');
const roblox = games.find(game => game.name === 'roblox');
const rleague = games.find(game => game.name === 'rleague');
const thesims4 = games.find(game => game.name === 'thesims4');

let fortniteButton = document.getElementById('fort');
let valorantButton = document.getElementById('val');
let cs2Button = document.getElementById('cs');
let lolButton = document.getElementById('league');
let gtaButton = document.getElementById('gta');
let hkButton = document.getElementById('hknight');
let mineButton = document.getElementById('minecraft');
let nfsButton = document.getElementById('nfs');
let rdr2Button = document.getElementById('rdr2');
let robloxButton = document.getElementById('roblox');
let rleagueButton = document.getElementById('rleague');
let theSims4Button = document.getElementById('thesims4');

let gameOptionsDiv = document.getElementById('gameOptions');
const printGPU = document.getElementById('gpu');
const printCPU = document.getElementById('cpu');
const printRAM = document.getElementById('ram');

let selectedGames = [];

function selectionToggler(button, game) {
    if (button.style.textDecoration === '') {
        button.style.textDecoration = 'line-through';
        button.style.opacity = 0.5;
        selectedGames.push(game);
    }
    else {
        button.style.textDecoration = '';
        button.style.opacity = 1;
        const index = selectedGames.indexOf(game);
        if (index > -1) {
            selectedGames.splice(index, 1);
        }
    }
}

fortniteButton.addEventListener('click', function () {
    selectionToggler(fortniteButton, fortnite);
});

valorantButton.addEventListener('click', function () {
    selectionToggler(valorantButton, valorant);
});

cs2Button.addEventListener('click', function () {
    selectionToggler(cs2Button, cs2);
});

lolButton.addEventListener('click', function () {
    selectionToggler(lolButton, lol);
});

gtaButton.addEventListener('click', function () {
    selectionToggler(gtaButton, gtaV);
});

hkButton.addEventListener('click', function () {
    selectionToggler(hkButton, hknight);
});

mineButton.addEventListener('click', function () {
    selectionToggler(mineButton, minecraft);
});

nfsButton.addEventListener('click', function () {
    selectionToggler(nfsButton, nfs);
});

rdr2Button.addEventListener('click', function () {
    selectionToggler(rdr2Button, rdr2);
});

robloxButton.addEventListener('click', function () {
    selectionToggler(robloxButton, roblox);
});

rleagueButton.addEventListener('click', function () {
    selectionToggler(rleagueButton, rleague);
});

theSims4Button.addEventListener('click', function () {
    selectionToggler(theSims4Button, thesims4);
});

function calculateRecSpecsPC() {
    if (selectedGames.length === 0) {
        printCPU.textContent = 'Nenhum jogo selecionado!';
        printGPU.textContent = 'Nenhum jogo selecionado!';
        printRAM.textContent = 'Nenhum jogo selecionado!';
    }
    else {
        let maxGPU = selectedGames[0].recHardware.GPU;
        let maxCPU = selectedGames[0].recHardware.CPU;
        let maxRAM = selectedGames[0].recHardware.RAM;

        selectedGames.forEach(game => {
            if (game.recHardware.GPU.rating > maxGPU.rating) {
                maxGPU = game.recHardware.GPU;
            }
            if (game.recHardware.CPU.rating > maxCPU.rating) {
                maxCPU = game.recHardware.CPU;
            }
            if (game.recHardware.RAM > maxRAM) {
                maxRAM = game.recHardware.RAM;
            }
        });

        let pcBuild = {
            GPU: maxGPU.model,
            CPU: maxCPU.model,
            RAM: maxRAM,
        };

        printGPU.textContent = pcBuild.GPU;
        printCPU.textContent = pcBuild.CPU;
        printRAM.textContent = pcBuild.RAM + 'GB';
    }
}

function calculateMinSpecsPC() {
    if (selectedGames.length === 0) {
        printCPU.textContent = 'Nenhum jogo selecionado!';
        printGPU.textContent = 'Nenhum jogo selecionado!';
        printRAM.textContent = 'Nenhum jogo selecionado!';
    }
    else {
        let maxGPU = selectedGames[0].minHardware.GPU;
        let maxCPU = selectedGames[0].minHardware.CPU;
        let maxRAM = selectedGames[0].minHardware.RAM;

        selectedGames.forEach(game => {
            if (game.minHardware.GPU.rating > maxGPU.rating) {
                maxGPU = game.minHardware.GPU;
            }
            if (game.minHardware.CPU.rating > maxCPU.rating) {
                maxCPU = game.minHardware.CPU;
            }
            if (game.minHardware.RAM > maxRAM) {
                maxRAM = game.minHardware.RAM;
            }
        });

        let pcBuild = {
            GPU: maxGPU.model,
            CPU: maxCPU.model,
            RAM: maxRAM,
        };

        printGPU.textContent = pcBuild.GPU;
        printCPU.textContent = pcBuild.CPU;
        printRAM.textContent = pcBuild.RAM + 'GB';
    }
}