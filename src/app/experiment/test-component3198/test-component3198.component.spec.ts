import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3198Component } from './test-component3198.component';

describe('TestComponent3198Component', () => {
  let component: TestComponent3198Component;
  let fixture: ComponentFixture<TestComponent3198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
