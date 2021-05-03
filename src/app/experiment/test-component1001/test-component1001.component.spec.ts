import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1001Component } from './test-component1001.component';

describe('TestComponent1001Component', () => {
  let component: TestComponent1001Component;
  let fixture: ComponentFixture<TestComponent1001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
