import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDialogComponent } from './hire-dialog.component';

describe('HireDialogComponent', () => {
  let component: HireDialogComponent;
  let fixture: ComponentFixture<HireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
