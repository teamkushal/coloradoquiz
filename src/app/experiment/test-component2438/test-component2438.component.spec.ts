import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2438Component } from './test-component2438.component';

describe('TestComponent2438Component', () => {
  let component: TestComponent2438Component;
  let fixture: ComponentFixture<TestComponent2438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2438Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
