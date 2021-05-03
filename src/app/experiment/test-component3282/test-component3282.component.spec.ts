import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3282Component } from './test-component3282.component';

describe('TestComponent3282Component', () => {
  let component: TestComponent3282Component;
  let fixture: ComponentFixture<TestComponent3282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
