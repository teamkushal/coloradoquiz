import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2145Component } from './test-component2145.component';

describe('TestComponent2145Component', () => {
  let component: TestComponent2145Component;
  let fixture: ComponentFixture<TestComponent2145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
