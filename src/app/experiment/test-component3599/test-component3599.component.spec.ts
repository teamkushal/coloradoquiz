import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3599Component } from './test-component3599.component';

describe('TestComponent3599Component', () => {
  let component: TestComponent3599Component;
  let fixture: ComponentFixture<TestComponent3599Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3599Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
