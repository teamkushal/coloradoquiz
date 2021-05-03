import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3766Component } from './test-component3766.component';

describe('TestComponent3766Component', () => {
  let component: TestComponent3766Component;
  let fixture: ComponentFixture<TestComponent3766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3766Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
