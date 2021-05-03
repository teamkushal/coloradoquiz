import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1260Component } from './test-component1260.component';

describe('TestComponent1260Component', () => {
  let component: TestComponent1260Component;
  let fixture: ComponentFixture<TestComponent1260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
