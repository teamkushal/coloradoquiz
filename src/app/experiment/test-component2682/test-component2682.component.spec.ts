import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2682Component } from './test-component2682.component';

describe('TestComponent2682Component', () => {
  let component: TestComponent2682Component;
  let fixture: ComponentFixture<TestComponent2682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2682Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
