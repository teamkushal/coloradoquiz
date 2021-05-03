import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2513Component } from './test-component2513.component';

describe('TestComponent2513Component', () => {
  let component: TestComponent2513Component;
  let fixture: ComponentFixture<TestComponent2513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2513Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
