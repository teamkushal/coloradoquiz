import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3527Component } from './test-component3527.component';

describe('TestComponent3527Component', () => {
  let component: TestComponent3527Component;
  let fixture: ComponentFixture<TestComponent3527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3527Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
