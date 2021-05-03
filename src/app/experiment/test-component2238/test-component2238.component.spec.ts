import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2238Component } from './test-component2238.component';

describe('TestComponent2238Component', () => {
  let component: TestComponent2238Component;
  let fixture: ComponentFixture<TestComponent2238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
