import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3383Component } from './test-component3383.component';

describe('TestComponent3383Component', () => {
  let component: TestComponent3383Component;
  let fixture: ComponentFixture<TestComponent3383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
