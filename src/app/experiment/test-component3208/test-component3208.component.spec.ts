import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3208Component } from './test-component3208.component';

describe('TestComponent3208Component', () => {
  let component: TestComponent3208Component;
  let fixture: ComponentFixture<TestComponent3208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
