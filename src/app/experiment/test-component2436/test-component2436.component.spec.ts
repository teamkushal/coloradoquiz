import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2436Component } from './test-component2436.component';

describe('TestComponent2436Component', () => {
  let component: TestComponent2436Component;
  let fixture: ComponentFixture<TestComponent2436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2436Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
