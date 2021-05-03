import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2766Component } from './test-component2766.component';

describe('TestComponent2766Component', () => {
  let component: TestComponent2766Component;
  let fixture: ComponentFixture<TestComponent2766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2766Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
