import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent861Component } from './test-component861.component';

describe('TestComponent861Component', () => {
  let component: TestComponent861Component;
  let fixture: ComponentFixture<TestComponent861Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent861Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
