import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1834Component } from './test-component1834.component';

describe('TestComponent1834Component', () => {
  let component: TestComponent1834Component;
  let fixture: ComponentFixture<TestComponent1834Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1834Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
