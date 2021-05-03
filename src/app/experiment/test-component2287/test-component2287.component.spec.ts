import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2287Component } from './test-component2287.component';

describe('TestComponent2287Component', () => {
  let component: TestComponent2287Component;
  let fixture: ComponentFixture<TestComponent2287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
