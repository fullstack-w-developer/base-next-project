import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ReactNode } from "react"

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export function RtlProvider({ children }: { children: ReactNode }) {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
