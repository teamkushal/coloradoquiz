import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3467Component } from './test-component3467.component';

describe('TestComponent3467Component', () => {
  let component: TestComponent3467Component;
  let fixture: ComponentFixture<TestComponent3467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3467Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
