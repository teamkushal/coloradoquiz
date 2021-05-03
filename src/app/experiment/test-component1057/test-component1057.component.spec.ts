import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1057Component } from './test-component1057.component';

describe('TestComponent1057Component', () => {
  let component: TestComponent1057Component;
  let fixture: ComponentFixture<TestComponent1057Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1057Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
