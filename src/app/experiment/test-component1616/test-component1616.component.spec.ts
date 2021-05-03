import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1616Component } from './test-component1616.component';

describe('TestComponent1616Component', () => {
  let component: TestComponent1616Component;
  let fixture: ComponentFixture<TestComponent1616Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1616Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
