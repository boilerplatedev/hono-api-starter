/**
 * This file should never be called directly from anywhere except from the runtime environment file.
 * A starter file for a Node.js based runtime is available as an example at `./node.ts`.
 */

import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) =>
    c.json({
      hello: 'world',
    }),
  )
  .get('/hello/:name', (c) => {
    const name = c.req.param('name')
    return c.json({
      hello: name,
    })
  })

export default app
