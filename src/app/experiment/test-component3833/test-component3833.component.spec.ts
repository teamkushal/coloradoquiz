import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3833Component } from './test-component3833.component';

describe('TestComponent3833Component', () => {
  let component: TestComponent3833Component;
  let fixture: ComponentFixture<TestComponent3833Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3833Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
