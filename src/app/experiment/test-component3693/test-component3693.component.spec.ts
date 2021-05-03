import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3693Component } from './test-component3693.component';

describe('TestComponent3693Component', () => {
  let component: TestComponent3693Component;
  let fixture: ComponentFixture<TestComponent3693Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3693Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
