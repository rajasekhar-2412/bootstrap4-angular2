import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Bootstrap4Angular2App} from '../app/bootstrap4-angular2';

beforeEachProviders(() => [Bootstrap4Angular2App]);

describe('App: Bootstrap4Angular2', () => {
  it('should have the `defaultMeaning` as 42', inject([Bootstrap4Angular2App], (app: Bootstrap4Angular2App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Bootstrap4Angular2App], (app: Bootstrap4Angular2App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

