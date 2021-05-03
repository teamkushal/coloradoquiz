import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent27Component } from './test-component27.component';

describe('TestComponent27Component', () => {
  let component: TestComponent27Component;
  let fixture: ComponentFixture<TestComponent27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
