import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3169Component } from './test-component3169.component';

describe('TestComponent3169Component', () => {
  let component: TestComponent3169Component;
  let fixture: ComponentFixture<TestComponent3169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
