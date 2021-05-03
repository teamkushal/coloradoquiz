import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3261Component } from './test-component3261.component';

describe('TestComponent3261Component', () => {
  let component: TestComponent3261Component;
  let fixture: ComponentFixture<TestComponent3261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
