import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1922Component } from './test-component1922.component';

describe('TestComponent1922Component', () => {
  let component: TestComponent1922Component;
  let fixture: ComponentFixture<TestComponent1922Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1922Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
