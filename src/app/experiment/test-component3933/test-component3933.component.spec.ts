import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3933Component } from './test-component3933.component';

describe('TestComponent3933Component', () => {
  let component: TestComponent3933Component;
  let fixture: ComponentFixture<TestComponent3933Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3933Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
