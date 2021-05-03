import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2289Component } from './test-component2289.component';

describe('TestComponent2289Component', () => {
  let component: TestComponent2289Component;
  let fixture: ComponentFixture<TestComponent2289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2289Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
