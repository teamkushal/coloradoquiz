import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2499Component } from './test-component2499.component';

describe('TestComponent2499Component', () => {
  let component: TestComponent2499Component;
  let fixture: ComponentFixture<TestComponent2499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2499Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
