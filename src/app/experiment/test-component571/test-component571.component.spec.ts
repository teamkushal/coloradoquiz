import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent571Component } from './test-component571.component';

describe('TestComponent571Component', () => {
  let component: TestComponent571Component;
  let fixture: ComponentFixture<TestComponent571Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent571Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
