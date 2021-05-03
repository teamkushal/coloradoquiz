import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3803Component } from './test-component3803.component';

describe('TestComponent3803Component', () => {
  let component: TestComponent3803Component;
  let fixture: ComponentFixture<TestComponent3803Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3803Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
