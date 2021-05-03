import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1932Component } from './test-component1932.component';

describe('TestComponent1932Component', () => {
  let component: TestComponent1932Component;
  let fixture: ComponentFixture<TestComponent1932Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1932Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
