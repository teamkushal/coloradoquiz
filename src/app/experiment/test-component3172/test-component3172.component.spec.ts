import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3172Component } from './test-component3172.component';

describe('TestComponent3172Component', () => {
  let component: TestComponent3172Component;
  let fixture: ComponentFixture<TestComponent3172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
