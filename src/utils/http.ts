import { createAlova, } from 'alova';
import adapterFetch from 'alova/fetch';
import ReactHook from 'alova/react';

export const alovaInstance = createAlova({
    baseURL: '/api',
    statesHook: ReactHook,
    requestAdapter: adapterFetch(),
    responded: response => response.json()
})
