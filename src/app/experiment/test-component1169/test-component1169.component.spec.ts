import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1169Component } from './test-component1169.component';

describe('TestComponent1169Component', () => {
  let component: TestComponent1169Component;
  let fixture: ComponentFixture<TestComponent1169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
