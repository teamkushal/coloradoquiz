import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1228Component } from './test-component1228.component';

describe('TestComponent1228Component', () => {
  let component: TestComponent1228Component;
  let fixture: ComponentFixture<TestComponent1228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
