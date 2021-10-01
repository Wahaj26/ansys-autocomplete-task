import { mount, shallowMount } from '@vue/test-utils';
import AutoComplete from '@/components/auto-complete.vue';

describe('Unit Test Cases of Auto Complete Component', () => {
  const data = [
    { id: 1, name: 'AAAAAA' },
    { id: 2, name: 'BBBBBB' },
    { id: 3, name: 'CCCCCC' },
    { id: 4, name: 'DDDDDD' },
  ];
  it('Verifying data passed to the dropdown', () => {
    const wrapper = shallowMount(AutoComplete, {
      propsData: { data },
    });
    expect(wrapper.props().data).toEqual(data);
  });

  it('Verifying placeholder props passed to the dropdown', async () => {
    const wrapper = shallowMount(AutoComplete, {
      propsData: { data: [], placeholder: 'Search any text' },
    });
    expect(wrapper.props().placeholder).toEqual('Search any text');
  });

  it('should given required data prop error', async () => {
    const spy = jest.spyOn(console, 'error');
    mount(AutoComplete, {
      propsData: {},
    });
    expect(spy).not.toHaveBeenCalledWith(
      expect('[Vue warn]: Missing required prop: "data"')
    );
  });
});
