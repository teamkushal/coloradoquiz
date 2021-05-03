import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3496Component } from './test-component3496.component';

describe('TestComponent3496Component', () => {
  let component: TestComponent3496Component;
  let fixture: ComponentFixture<TestComponent3496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3496Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
