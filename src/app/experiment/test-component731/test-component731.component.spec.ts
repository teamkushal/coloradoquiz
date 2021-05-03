import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent731Component } from './test-component731.component';

describe('TestComponent731Component', () => {
  let component: TestComponent731Component;
  let fixture: ComponentFixture<TestComponent731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent731Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
