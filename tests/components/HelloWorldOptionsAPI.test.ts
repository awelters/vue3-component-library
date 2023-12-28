import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../../src/components/HelloWorldOptionsAPI.vue'

describe('HelloWorldOptionsAPI', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('count is 0')
    expect(wrapper.text()).toContain('count doubled is: 0')
  })
  it('increment', async () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' }
    })
    expect(wrapper.text()).toContain('count is 0')
    expect(wrapper.text()).toContain('count doubled is: 0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('count is 1')
    expect(wrapper.text()).toContain('count doubled is: 2')
  })
})
