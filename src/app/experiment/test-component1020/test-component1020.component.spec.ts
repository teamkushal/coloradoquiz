import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1020Component } from './test-component1020.component';

describe('TestComponent1020Component', () => {
  let component: TestComponent1020Component;
  let fixture: ComponentFixture<TestComponent1020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
