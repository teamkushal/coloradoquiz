import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1014Component } from './test-component1014.component';

describe('TestComponent1014Component', () => {
  let component: TestComponent1014Component;
  let fixture: ComponentFixture<TestComponent1014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
