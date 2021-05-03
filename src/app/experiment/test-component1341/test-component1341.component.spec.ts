import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1341Component } from './test-component1341.component';

describe('TestComponent1341Component', () => {
  let component: TestComponent1341Component;
  let fixture: ComponentFixture<TestComponent1341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
