import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2532Component } from './test-component2532.component';

describe('TestComponent2532Component', () => {
  let component: TestComponent2532Component;
  let fixture: ComponentFixture<TestComponent2532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2532Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
