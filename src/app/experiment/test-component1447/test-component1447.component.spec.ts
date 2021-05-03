import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1447Component } from './test-component1447.component';

describe('TestComponent1447Component', () => {
  let component: TestComponent1447Component;
  let fixture: ComponentFixture<TestComponent1447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1447Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
