import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3708Component } from './test-component3708.component';

describe('TestComponent3708Component', () => {
  let component: TestComponent3708Component;
  let fixture: ComponentFixture<TestComponent3708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3708Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
