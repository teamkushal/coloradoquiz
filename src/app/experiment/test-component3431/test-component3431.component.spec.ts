import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3431Component } from './test-component3431.component';

describe('TestComponent3431Component', () => {
  let component: TestComponent3431Component;
  let fixture: ComponentFixture<TestComponent3431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3431Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
