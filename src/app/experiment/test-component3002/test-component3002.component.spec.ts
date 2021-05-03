import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3002Component } from './test-component3002.component';

describe('TestComponent3002Component', () => {
  let component: TestComponent3002Component;
  let fixture: ComponentFixture<TestComponent3002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
