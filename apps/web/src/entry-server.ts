import {createRequest, sendResponse} from "@mjackson/node-fetch-server";
import { createRequestHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { createRouter } from '@web/router'
import type {IncomingMessage, ServerResponse} from "node:http";

export async function render(request: Request) {
	return createRequestHandler({
		createRouter,
		request
	})(defaultStreamHandler)
}

export default async function handler(
	req: IncomingMessage,
	res: ServerResponse,
) {
	const request = createRequest(req, res);

	const handler =  createRequestHandler({
		createRouter,
		request
	})(defaultStreamHandler)

	return sendResponse(res, await handler);
}
