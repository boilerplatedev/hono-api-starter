import * as Sentry from '@sentry/aws-serverless'

import { env } from '@/env'

Sentry.init({
  dsn: env.SENTRY_DSN,
  integrations: [Sentry.prismaIntegration(), Sentry.captureConsoleIntegration({ levels: ['error', 'info'] })],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  enableTracing: true,
})

export default Sentry
