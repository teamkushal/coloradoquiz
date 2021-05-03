import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2431Component } from './test-component2431.component';

describe('TestComponent2431Component', () => {
  let component: TestComponent2431Component;
  let fixture: ComponentFixture<TestComponent2431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2431Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
