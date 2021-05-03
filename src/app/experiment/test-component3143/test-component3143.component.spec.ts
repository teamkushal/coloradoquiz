import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3143Component } from './test-component3143.component';

describe('TestComponent3143Component', () => {
  let component: TestComponent3143Component;
  let fixture: ComponentFixture<TestComponent3143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
