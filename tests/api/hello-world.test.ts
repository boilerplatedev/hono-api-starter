import { testClient } from 'hono/testing'
import { expect, test } from 'vitest'

import app from '@/app'

test('test if / returns hello world', async () => {
  const client = testClient(app)
  const index = await client.index.$get()

  const response = await index.json()

  expect(index.status).toBe(200)
  expect(response).toEqual({ hello: 'world' })
})

test('test if /hello/:name returns hello name', async () => {
  const client = testClient(app)
  const index = await client.hello[':name'].$get({ param: { name: 'John' } })

  const response = await index.json()

  expect(index.status).toBe(200)
  expect(response).toEqual({ hello: 'John' })
})
