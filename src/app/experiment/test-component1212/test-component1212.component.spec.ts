import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1212Component } from './test-component1212.component';

describe('TestComponent1212Component', () => {
  let component: TestComponent1212Component;
  let fixture: ComponentFixture<TestComponent1212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
