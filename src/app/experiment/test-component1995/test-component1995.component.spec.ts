import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1995Component } from './test-component1995.component';

describe('TestComponent1995Component', () => {
  let component: TestComponent1995Component;
  let fixture: ComponentFixture<TestComponent1995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1995Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
