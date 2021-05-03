import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3470Component } from './test-component3470.component';

describe('TestComponent3470Component', () => {
  let component: TestComponent3470Component;
  let fixture: ComponentFixture<TestComponent3470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3470Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
