import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3694Component } from './test-component3694.component';

describe('TestComponent3694Component', () => {
  let component: TestComponent3694Component;
  let fixture: ComponentFixture<TestComponent3694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3694Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
