import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3395Component } from './test-component3395.component';

describe('TestComponent3395Component', () => {
  let component: TestComponent3395Component;
  let fixture: ComponentFixture<TestComponent3395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
