import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent299Component } from './test-component299.component';

describe('TestComponent299Component', () => {
  let component: TestComponent299Component;
  let fixture: ComponentFixture<TestComponent299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
