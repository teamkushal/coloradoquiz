import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2061Component } from './test-component2061.component';

describe('TestComponent2061Component', () => {
  let component: TestComponent2061Component;
  let fixture: ComponentFixture<TestComponent2061Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2061Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
