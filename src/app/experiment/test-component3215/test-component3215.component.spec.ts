import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3215Component } from './test-component3215.component';

describe('TestComponent3215Component', () => {
  let component: TestComponent3215Component;
  let fixture: ComponentFixture<TestComponent3215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
