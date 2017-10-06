'use strict';
const mongoose = require('mongoose');
const db = mongoose.get('db');

const exampleSchema = new mongoose.Schema({
    myId: { type: String, required: true },
    randomString: { type: String, required: true },
    mixedSchema: mongoose.Schema.Types.Mixed
});

db.model('exampleModel', exampleSchema, 'exampleModel');