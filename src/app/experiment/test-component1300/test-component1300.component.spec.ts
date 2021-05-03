import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1300Component } from './test-component1300.component';

describe('TestComponent1300Component', () => {
  let component: TestComponent1300Component;
  let fixture: ComponentFixture<TestComponent1300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
