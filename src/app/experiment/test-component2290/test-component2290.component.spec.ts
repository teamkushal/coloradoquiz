import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2290Component } from './test-component2290.component';

describe('TestComponent2290Component', () => {
  let component: TestComponent2290Component;
  let fixture: ComponentFixture<TestComponent2290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
