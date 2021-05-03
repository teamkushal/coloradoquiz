import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1593Component } from './test-component1593.component';

describe('TestComponent1593Component', () => {
  let component: TestComponent1593Component;
  let fixture: ComponentFixture<TestComponent1593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1593Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
