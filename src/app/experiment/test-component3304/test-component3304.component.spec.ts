import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3304Component } from './test-component3304.component';

describe('TestComponent3304Component', () => {
  let component: TestComponent3304Component;
  let fixture: ComponentFixture<TestComponent3304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
