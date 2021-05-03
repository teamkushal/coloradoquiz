import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3560Component } from './test-component3560.component';

describe('TestComponent3560Component', () => {
  let component: TestComponent3560Component;
  let fixture: ComponentFixture<TestComponent3560Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3560Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
