import 'dotenv/config'

import { serve } from '@hono/node-server'
import { secureHeaders } from 'hono/secure-headers'
import { trimTrailingSlash } from 'hono/trailing-slash'

import app from './app'

app.use(secureHeaders())
app.use(trimTrailingSlash())

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`🚀 Server running on port ${info.port}`)
  },
)
