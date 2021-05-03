import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3791Component } from './test-component3791.component';

describe('TestComponent3791Component', () => {
  let component: TestComponent3791Component;
  let fixture: ComponentFixture<TestComponent3791Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3791Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
