import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BoardSquare from '../BoardSquare.vue'

describe('BoardSquare', () => {
  it('renders properly', () => {
    const wrapper = mount(BoardSquare, { props: { symbol: '%' } })
    expect(wrapper.text()).toContain('%')
  })
})
