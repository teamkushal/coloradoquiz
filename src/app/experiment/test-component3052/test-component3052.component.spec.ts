import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3052Component } from './test-component3052.component';

describe('TestComponent3052Component', () => {
  let component: TestComponent3052Component;
  let fixture: ComponentFixture<TestComponent3052Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3052Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
