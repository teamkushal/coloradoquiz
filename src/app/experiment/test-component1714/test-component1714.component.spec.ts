import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1714Component } from './test-component1714.component';

describe('TestComponent1714Component', () => {
  let component: TestComponent1714Component;
  let fixture: ComponentFixture<TestComponent1714Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1714Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
