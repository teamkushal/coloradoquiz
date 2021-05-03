import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1521Component } from './test-component1521.component';

describe('TestComponent1521Component', () => {
  let component: TestComponent1521Component;
  let fixture: ComponentFixture<TestComponent1521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1521Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
