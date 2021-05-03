import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3734Component } from './test-component3734.component';

describe('TestComponent3734Component', () => {
  let component: TestComponent3734Component;
  let fixture: ComponentFixture<TestComponent3734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3734Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
