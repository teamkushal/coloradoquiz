import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3673Component } from './test-component3673.component';

describe('TestComponent3673Component', () => {
  let component: TestComponent3673Component;
  let fixture: ComponentFixture<TestComponent3673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3673Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
