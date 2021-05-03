import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3564Component } from './test-component3564.component';

describe('TestComponent3564Component', () => {
  let component: TestComponent3564Component;
  let fixture: ComponentFixture<TestComponent3564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3564Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
