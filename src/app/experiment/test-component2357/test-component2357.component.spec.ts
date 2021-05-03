import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2357Component } from './test-component2357.component';

describe('TestComponent2357Component', () => {
  let component: TestComponent2357Component;
  let fixture: ComponentFixture<TestComponent2357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
