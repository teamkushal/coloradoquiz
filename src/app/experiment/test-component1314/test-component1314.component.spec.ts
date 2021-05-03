import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1314Component } from './test-component1314.component';

describe('TestComponent1314Component', () => {
  let component: TestComponent1314Component;
  let fixture: ComponentFixture<TestComponent1314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
