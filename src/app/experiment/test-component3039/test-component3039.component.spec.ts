import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3039Component } from './test-component3039.component';

describe('TestComponent3039Component', () => {
  let component: TestComponent3039Component;
  let fixture: ComponentFixture<TestComponent3039Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3039Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
