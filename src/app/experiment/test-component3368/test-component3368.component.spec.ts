import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3368Component } from './test-component3368.component';

describe('TestComponent3368Component', () => {
  let component: TestComponent3368Component;
  let fixture: ComponentFixture<TestComponent3368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
