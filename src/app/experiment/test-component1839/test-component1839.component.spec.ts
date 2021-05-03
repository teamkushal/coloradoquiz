import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1839Component } from './test-component1839.component';

describe('TestComponent1839Component', () => {
  let component: TestComponent1839Component;
  let fixture: ComponentFixture<TestComponent1839Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1839Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
