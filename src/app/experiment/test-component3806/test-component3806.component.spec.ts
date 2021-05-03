import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3806Component } from './test-component3806.component';

describe('TestComponent3806Component', () => {
  let component: TestComponent3806Component;
  let fixture: ComponentFixture<TestComponent3806Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3806Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
