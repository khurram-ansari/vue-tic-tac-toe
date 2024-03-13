import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BaseBoard from '../BaseBoard.vue'
import BoardSquare from '../BoardSquare.vue'

describe('BaseBoard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(BaseBoard)
    expect(wrapper.find('.board')).toBeTruthy()
  })

  it('renders correct number of squares', () => {
    const wrapper = shallowMount(BaseBoard)
    expect(wrapper.findAllComponents(BoardSquare)).toHaveLength(9)
  })
})
