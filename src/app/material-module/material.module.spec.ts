import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let materialModule: MaterialModule;

  beforeEach(() => {
    materialModule = new MaterialModule();
  });

  it('Load Angular Module', () => {
    expect(materialModule).toBeTruthy();
  });
});
