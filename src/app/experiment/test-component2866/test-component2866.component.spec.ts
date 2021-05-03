import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2866Component } from './test-component2866.component';

describe('TestComponent2866Component', () => {
  let component: TestComponent2866Component;
  let fixture: ComponentFixture<TestComponent2866Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2866Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
