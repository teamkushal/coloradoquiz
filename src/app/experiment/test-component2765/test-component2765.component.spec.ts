import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2765Component } from './test-component2765.component';

describe('TestComponent2765Component', () => {
  let component: TestComponent2765Component;
  let fixture: ComponentFixture<TestComponent2765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2765Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
