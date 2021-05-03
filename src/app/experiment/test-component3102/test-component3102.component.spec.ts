import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3102Component } from './test-component3102.component';

describe('TestComponent3102Component', () => {
  let component: TestComponent3102Component;
  let fixture: ComponentFixture<TestComponent3102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
