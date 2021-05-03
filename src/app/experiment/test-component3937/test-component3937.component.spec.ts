import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3937Component } from './test-component3937.component';

describe('TestComponent3937Component', () => {
  let component: TestComponent3937Component;
  let fixture: ComponentFixture<TestComponent3937Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3937Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
