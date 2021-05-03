import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3733Component } from './test-component3733.component';

describe('TestComponent3733Component', () => {
  let component: TestComponent3733Component;
  let fixture: ComponentFixture<TestComponent3733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3733Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
