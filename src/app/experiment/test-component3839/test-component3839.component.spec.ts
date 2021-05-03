import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3839Component } from './test-component3839.component';

describe('TestComponent3839Component', () => {
  let component: TestComponent3839Component;
  let fixture: ComponentFixture<TestComponent3839Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3839Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
