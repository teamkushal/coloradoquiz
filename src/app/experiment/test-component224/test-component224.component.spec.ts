import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent224Component } from './test-component224.component';

describe('TestComponent224Component', () => {
  let component: TestComponent224Component;
  let fixture: ComponentFixture<TestComponent224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
