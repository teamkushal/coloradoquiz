import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1679Component } from './test-component1679.component';

describe('TestComponent1679Component', () => {
  let component: TestComponent1679Component;
  let fixture: ComponentFixture<TestComponent1679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1679Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
