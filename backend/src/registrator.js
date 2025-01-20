import express, { Router } from 'express';

function handleNewPlayer(req, res) {
    res.status(501).send('Not implemented');
}
function handleLinkStart(req, res) {
    res.status(501).send('Not implemented');
}
function getPlayerStats(req, res) {
    res.status(501).send('Not implemented');
}
function handleRegister(req, res) {
    res.status(501).send('Not implemented');
}

const registrator = Router();
registrator.use(express.json());
registrator.post('/newplayer', handleNewPlayer);
registrator.post('/linkstart', handleLinkStart);
registrator.post('/playerstats', getPlayerStats);
registrator.post('/register', handleRegister);
export default registrator;