import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3367Component } from './test-component3367.component';

describe('TestComponent3367Component', () => {
  let component: TestComponent3367Component;
  let fixture: ComponentFixture<TestComponent3367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
