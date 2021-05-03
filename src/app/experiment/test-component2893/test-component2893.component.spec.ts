import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2893Component } from './test-component2893.component';

describe('TestComponent2893Component', () => {
  let component: TestComponent2893Component;
  let fixture: ComponentFixture<TestComponent2893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2893Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
