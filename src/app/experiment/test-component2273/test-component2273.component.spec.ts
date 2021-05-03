import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2273Component } from './test-component2273.component';

describe('TestComponent2273Component', () => {
  let component: TestComponent2273Component;
  let fixture: ComponentFixture<TestComponent2273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
