import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1215Component } from './test-component1215.component';

describe('TestComponent1215Component', () => {
  let component: TestComponent1215Component;
  let fixture: ComponentFixture<TestComponent1215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
