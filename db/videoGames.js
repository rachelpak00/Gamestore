const client = require('./client');
const util = require('util');

// GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query(`
            SELECT * FROM videoGames;
        `);
        return videoGames;
    } catch (error) {
        throw error; 
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/video-games - create a new video game
async function createVideoGame(body) {
    const { name, description, price, inStock, isPopular, imgUrl} = body;
    try {
        const { rows: [videoGame] } = await client.query(`
            INSERT INTO videoGames(name, description, price, "inStock", "isPopular", "imgUrl")VALUES($1, $2, $3, $4, $5, $6)RETURNING *;
            `, [name, description, price, inStock, isPopular, imgUrl]);
            return videoGame;
    } catch (error) {
        throw error;
    }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    // LOGIC GOES HERE
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    // LOGIC GOES HERE
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}