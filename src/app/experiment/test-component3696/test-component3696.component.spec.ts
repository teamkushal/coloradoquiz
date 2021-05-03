import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3696Component } from './test-component3696.component';

describe('TestComponent3696Component', () => {
  let component: TestComponent3696Component;
  let fixture: ComponentFixture<TestComponent3696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3696Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
