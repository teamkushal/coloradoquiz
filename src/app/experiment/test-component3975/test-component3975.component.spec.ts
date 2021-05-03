import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3975Component } from './test-component3975.component';

describe('TestComponent3975Component', () => {
  let component: TestComponent3975Component;
  let fixture: ComponentFixture<TestComponent3975Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3975Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
