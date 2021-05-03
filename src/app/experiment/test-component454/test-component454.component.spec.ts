import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent454Component } from './test-component454.component';

describe('TestComponent454Component', () => {
  let component: TestComponent454Component;
  let fixture: ComponentFixture<TestComponent454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent454Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
