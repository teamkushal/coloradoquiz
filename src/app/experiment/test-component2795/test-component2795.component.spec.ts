import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2795Component } from './test-component2795.component';

describe('TestComponent2795Component', () => {
  let component: TestComponent2795Component;
  let fixture: ComponentFixture<TestComponent2795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2795Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
