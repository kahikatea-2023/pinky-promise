import { createRoot } from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, createRoutesFromElements } from 'react-router-dom'
import { Suspense } from 'react'
import ProtectedComponent from './components/UI/ProtectedComponent'
import Loading from './components/UI/Loading'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    <Route
      path="find-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={AddFriends} />
        </Suspense>
      }
    />
    <Route
      path="my-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={MyFriends} />
        </Suspense>
      }
    />
    <Route
      path="profile"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={UserProfilePage} />
        </Suspense>
      }
    />
    <Route
      path="my-promises"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={MyPromises} />
        </Suspense>
      }
    />
    <Route
      path="add-promise"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={AddPromisePage} />
        </Suspense>
      }
    />
  </Route>
)

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  )
})