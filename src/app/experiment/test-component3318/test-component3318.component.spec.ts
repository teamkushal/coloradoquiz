import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3318Component } from './test-component3318.component';

describe('TestComponent3318Component', () => {
  let component: TestComponent3318Component;
  let fixture: ComponentFixture<TestComponent3318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
