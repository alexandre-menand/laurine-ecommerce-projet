import { describe, expect, it } from 'vitest'

describe('purchasing flow', () => {
  it('allows purchases within business hours', () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13)

    // access Date.now() will result in the date set above
    expect(date).toEqual({ message: 'Success' })
  })
})
