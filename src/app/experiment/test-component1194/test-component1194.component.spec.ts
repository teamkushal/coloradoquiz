import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1194Component } from './test-component1194.component';

describe('TestComponent1194Component', () => {
  let component: TestComponent1194Component;
  let fixture: ComponentFixture<TestComponent1194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
