import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3445Component } from './test-component3445.component';

describe('TestComponent3445Component', () => {
  let component: TestComponent3445Component;
  let fixture: ComponentFixture<TestComponent3445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3445Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
