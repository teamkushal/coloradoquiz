import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2129Component } from './test-component2129.component';

describe('TestComponent2129Component', () => {
  let component: TestComponent2129Component;
  let fixture: ComponentFixture<TestComponent2129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
