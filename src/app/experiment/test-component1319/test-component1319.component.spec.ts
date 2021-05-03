import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1319Component } from './test-component1319.component';

describe('TestComponent1319Component', () => {
  let component: TestComponent1319Component;
  let fixture: ComponentFixture<TestComponent1319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1319Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
