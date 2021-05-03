import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2954Component } from './test-component2954.component';

describe('TestComponent2954Component', () => {
  let component: TestComponent2954Component;
  let fixture: ComponentFixture<TestComponent2954Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2954Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
