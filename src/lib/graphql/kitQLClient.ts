import { KitQLClient } from '@kitql/client';

export const kitQLClient = new KitQLClient({
	url: `http://localhost:8081/graphql`,
	headersContentType: 'application/json',
	logType: ['client', 'server', 'operationAndvariables'],
	endpointSSRDelayMs: 1000,
	endpointNetworkDelayMs: 2000
});
