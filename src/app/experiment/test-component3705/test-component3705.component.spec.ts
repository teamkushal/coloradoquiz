import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3705Component } from './test-component3705.component';

describe('TestComponent3705Component', () => {
  let component: TestComponent3705Component;
  let fixture: ComponentFixture<TestComponent3705Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3705Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
