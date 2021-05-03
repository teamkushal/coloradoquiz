import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3390Component } from './test-component3390.component';

describe('TestComponent3390Component', () => {
  let component: TestComponent3390Component;
  let fixture: ComponentFixture<TestComponent3390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
