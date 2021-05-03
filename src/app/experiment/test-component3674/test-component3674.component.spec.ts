import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3674Component } from './test-component3674.component';

describe('TestComponent3674Component', () => {
  let component: TestComponent3674Component;
  let fixture: ComponentFixture<TestComponent3674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3674Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
