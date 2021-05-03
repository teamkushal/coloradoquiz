import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3711Component } from './test-component3711.component';

describe('TestComponent3711Component', () => {
  let component: TestComponent3711Component;
  let fixture: ComponentFixture<TestComponent3711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3711Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
