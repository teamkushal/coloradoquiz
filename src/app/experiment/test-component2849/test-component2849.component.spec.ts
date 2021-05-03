import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2849Component } from './test-component2849.component';

describe('TestComponent2849Component', () => {
  let component: TestComponent2849Component;
  let fixture: ComponentFixture<TestComponent2849Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2849Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
