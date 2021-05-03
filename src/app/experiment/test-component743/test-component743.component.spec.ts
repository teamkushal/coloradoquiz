import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent743Component } from './test-component743.component';

describe('TestComponent743Component', () => {
  let component: TestComponent743Component;
  let fixture: ComponentFixture<TestComponent743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent743Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
