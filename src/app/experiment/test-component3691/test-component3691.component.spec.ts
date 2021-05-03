import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3691Component } from './test-component3691.component';

describe('TestComponent3691Component', () => {
  let component: TestComponent3691Component;
  let fixture: ComponentFixture<TestComponent3691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3691Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
