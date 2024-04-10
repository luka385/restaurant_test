"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = void 0;
const express_1 = require("express");
const handler_1 = require("./handler");
function setupServer(usecase) {
    const r = (0, express_1.Router)();
    const handler = new handler_1.Handler(usecase);
    r.post('/reservation', handler.createReservation.bind(handler));
    r.get('/reservation', handler.GetAllReservation.bind(handler));
    r.delete('/reservation/:id', handler.deleteReservation.bind(handler));
    return r;
}
exports.setupServer = setupServer;
