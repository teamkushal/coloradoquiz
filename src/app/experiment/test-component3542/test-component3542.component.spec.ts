import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3542Component } from './test-component3542.component';

describe('TestComponent3542Component', () => {
  let component: TestComponent3542Component;
  let fixture: ComponentFixture<TestComponent3542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3542Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
