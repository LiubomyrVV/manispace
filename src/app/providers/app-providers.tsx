import { QueryProvider } from './query/query-provider'
import { I18nProvider } from './i18n/i18n-provider'
import { RouterProvider } from './router/router-provider'

export function AppProviders() {
  return (
    <QueryProvider>
      <I18nProvider>
        <RouterProvider/>
      </I18nProvider>
    </QueryProvider>
  )
}
