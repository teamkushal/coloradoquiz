import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2692Component } from './test-component2692.component';

describe('TestComponent2692Component', () => {
  let component: TestComponent2692Component;
  let fixture: ComponentFixture<TestComponent2692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2692Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
