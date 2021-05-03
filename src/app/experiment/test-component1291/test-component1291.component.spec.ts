import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1291Component } from './test-component1291.component';

describe('TestComponent1291Component', () => {
  let component: TestComponent1291Component;
  let fixture: ComponentFixture<TestComponent1291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1291Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
