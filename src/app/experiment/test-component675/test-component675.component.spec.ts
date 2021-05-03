import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent675Component } from './test-component675.component';

describe('TestComponent675Component', () => {
  let component: TestComponent675Component;
  let fixture: ComponentFixture<TestComponent675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent675Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
