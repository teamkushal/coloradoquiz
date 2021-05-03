import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2780Component } from './test-component2780.component';

describe('TestComponent2780Component', () => {
  let component: TestComponent2780Component;
  let fixture: ComponentFixture<TestComponent2780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2780Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
