import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2004Component } from './test-component2004.component';

describe('TestComponent2004Component', () => {
  let component: TestComponent2004Component;
  let fixture: ComponentFixture<TestComponent2004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
