import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2932Component } from './test-component2932.component';

describe('TestComponent2932Component', () => {
  let component: TestComponent2932Component;
  let fixture: ComponentFixture<TestComponent2932Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2932Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
