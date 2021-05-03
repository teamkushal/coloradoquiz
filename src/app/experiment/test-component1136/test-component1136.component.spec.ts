import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1136Component } from './test-component1136.component';

describe('TestComponent1136Component', () => {
  let component: TestComponent1136Component;
  let fixture: ComponentFixture<TestComponent1136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
