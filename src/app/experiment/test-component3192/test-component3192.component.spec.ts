import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3192Component } from './test-component3192.component';

describe('TestComponent3192Component', () => {
  let component: TestComponent3192Component;
  let fixture: ComponentFixture<TestComponent3192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
