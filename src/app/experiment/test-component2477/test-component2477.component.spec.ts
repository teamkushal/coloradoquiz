import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2477Component } from './test-component2477.component';

describe('TestComponent2477Component', () => {
  let component: TestComponent2477Component;
  let fixture: ComponentFixture<TestComponent2477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2477Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
