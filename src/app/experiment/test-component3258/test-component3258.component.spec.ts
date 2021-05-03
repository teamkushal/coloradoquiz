import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3258Component } from './test-component3258.component';

describe('TestComponent3258Component', () => {
  let component: TestComponent3258Component;
  let fixture: ComponentFixture<TestComponent3258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
