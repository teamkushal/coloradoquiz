import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3115Component } from './test-component3115.component';

describe('TestComponent3115Component', () => {
  let component: TestComponent3115Component;
  let fixture: ComponentFixture<TestComponent3115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
