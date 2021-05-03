import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent806Component } from './test-component806.component';

describe('TestComponent806Component', () => {
  let component: TestComponent806Component;
  let fixture: ComponentFixture<TestComponent806Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent806Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
