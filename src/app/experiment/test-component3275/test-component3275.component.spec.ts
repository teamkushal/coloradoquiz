import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3275Component } from './test-component3275.component';

describe('TestComponent3275Component', () => {
  let component: TestComponent3275Component;
  let fixture: ComponentFixture<TestComponent3275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
