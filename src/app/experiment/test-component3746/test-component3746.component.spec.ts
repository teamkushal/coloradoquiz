import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3746Component } from './test-component3746.component';

describe('TestComponent3746Component', () => {
  let component: TestComponent3746Component;
  let fixture: ComponentFixture<TestComponent3746Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3746Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
