import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3411Component } from './test-component3411.component';

describe('TestComponent3411Component', () => {
  let component: TestComponent3411Component;
  let fixture: ComponentFixture<TestComponent3411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
