import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3093Component } from './test-component3093.component';

describe('TestComponent3093Component', () => {
  let component: TestComponent3093Component;
  let fixture: ComponentFixture<TestComponent3093Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3093Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
