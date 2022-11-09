import * as express from 'express';

declare global {
	namespace Express {
		interface Request {
			user: {
				isOng: boolean;
				id: string;
			}
			ong: {
				isActive: boolean;
				id: string;
			};
		}
	}
}