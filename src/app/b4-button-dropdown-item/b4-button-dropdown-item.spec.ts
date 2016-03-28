import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {B4ButtonDropdownItem} from './b4-button-dropdown-item';


describe('B4ButtonDropdownItem Component', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(B4ButtonDropdownItem).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
