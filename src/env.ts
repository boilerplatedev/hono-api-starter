import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const fetchEnvironmentVariables = () =>
  createEnv({
    server: {
      APP_ENV: z.enum(['local', 'development', 'production']),
      NODE_ENV: z.enum(['development', 'production']),
      DATABASE_URL: z.string().url(), // will be auto set when deployed
      DIRECT_DATABASE_URL: z.string().url(), // will be auto set when deployed
      WEBHOOK_API_URL: z.string().url(), // will be auto set when deployed
      SENTRY_DSN: z.string().url().optional(),
    },
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
  })

export const env = fetchEnvironmentVariables()
