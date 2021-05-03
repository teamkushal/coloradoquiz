import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2143Component } from './test-component2143.component';

describe('TestComponent2143Component', () => {
  let component: TestComponent2143Component;
  let fixture: ComponentFixture<TestComponent2143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
