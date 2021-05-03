import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2593Component } from './test-component2593.component';

describe('TestComponent2593Component', () => {
  let component: TestComponent2593Component;
  let fixture: ComponentFixture<TestComponent2593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2593Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
