import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2947Component } from './test-component2947.component';

describe('TestComponent2947Component', () => {
  let component: TestComponent2947Component;
  let fixture: ComponentFixture<TestComponent2947Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2947Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
