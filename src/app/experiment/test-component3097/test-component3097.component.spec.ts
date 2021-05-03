import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3097Component } from './test-component3097.component';

describe('TestComponent3097Component', () => {
  let component: TestComponent3097Component;
  let fixture: ComponentFixture<TestComponent3097Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3097Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
