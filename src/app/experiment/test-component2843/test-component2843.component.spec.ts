import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2843Component } from './test-component2843.component';

describe('TestComponent2843Component', () => {
  let component: TestComponent2843Component;
  let fixture: ComponentFixture<TestComponent2843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2843Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
