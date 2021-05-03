import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3744Component } from './test-component3744.component';

describe('TestComponent3744Component', () => {
  let component: TestComponent3744Component;
  let fixture: ComponentFixture<TestComponent3744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3744Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
