import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3532Component } from './test-component3532.component';

describe('TestComponent3532Component', () => {
  let component: TestComponent3532Component;
  let fixture: ComponentFixture<TestComponent3532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3532Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
