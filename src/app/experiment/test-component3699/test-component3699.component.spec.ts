import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3699Component } from './test-component3699.component';

describe('TestComponent3699Component', () => {
  let component: TestComponent3699Component;
  let fixture: ComponentFixture<TestComponent3699Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3699Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
