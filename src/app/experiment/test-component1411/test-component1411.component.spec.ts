import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1411Component } from './test-component1411.component';

describe('TestComponent1411Component', () => {
  let component: TestComponent1411Component;
  let fixture: ComponentFixture<TestComponent1411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
