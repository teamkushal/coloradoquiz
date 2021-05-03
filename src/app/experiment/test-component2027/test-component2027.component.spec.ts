import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2027Component } from './test-component2027.component';

describe('TestComponent2027Component', () => {
  let component: TestComponent2027Component;
  let fixture: ComponentFixture<TestComponent2027Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2027Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
