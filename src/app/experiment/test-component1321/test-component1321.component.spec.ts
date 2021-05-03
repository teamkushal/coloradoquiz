import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1321Component } from './test-component1321.component';

describe('TestComponent1321Component', () => {
  let component: TestComponent1321Component;
  let fixture: ComponentFixture<TestComponent1321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
