import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3088Component } from './test-component3088.component';

describe('TestComponent3088Component', () => {
  let component: TestComponent3088Component;
  let fixture: ComponentFixture<TestComponent3088Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3088Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
