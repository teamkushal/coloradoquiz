import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2695Component } from './test-component2695.component';

describe('TestComponent2695Component', () => {
  let component: TestComponent2695Component;
  let fixture: ComponentFixture<TestComponent2695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2695Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
