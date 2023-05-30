import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';
import GeneralLayout from 'modules/core/presentation/components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const asPath = router.asPath.split('/')[1];

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        retry: 1
      },
    },
  }));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GeneralLayout>
            <Component {...pageProps} />
          </GeneralLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
