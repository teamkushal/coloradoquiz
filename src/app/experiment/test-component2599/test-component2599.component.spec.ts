import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2599Component } from './test-component2599.component';

describe('TestComponent2599Component', () => {
  let component: TestComponent2599Component;
  let fixture: ComponentFixture<TestComponent2599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2599Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
