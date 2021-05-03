import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3500Component } from './test-component3500.component';

describe('TestComponent3500Component', () => {
  let component: TestComponent3500Component;
  let fixture: ComponentFixture<TestComponent3500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
