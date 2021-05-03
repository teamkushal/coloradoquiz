import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2298Component } from './test-component2298.component';

describe('TestComponent2298Component', () => {
  let component: TestComponent2298Component;
  let fixture: ComponentFixture<TestComponent2298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
