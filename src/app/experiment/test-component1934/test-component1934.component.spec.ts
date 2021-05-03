import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1934Component } from './test-component1934.component';

describe('TestComponent1934Component', () => {
  let component: TestComponent1934Component;
  let fixture: ComponentFixture<TestComponent1934Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1934Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
