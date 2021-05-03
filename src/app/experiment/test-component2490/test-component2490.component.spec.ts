import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2490Component } from './test-component2490.component';

describe('TestComponent2490Component', () => {
  let component: TestComponent2490Component;
  let fixture: ComponentFixture<TestComponent2490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2490Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
