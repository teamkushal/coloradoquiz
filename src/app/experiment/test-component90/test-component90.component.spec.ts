import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent90Component } from './test-component90.component';

describe('TestComponent90Component', () => {
  let component: TestComponent90Component;
  let fixture: ComponentFixture<TestComponent90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
