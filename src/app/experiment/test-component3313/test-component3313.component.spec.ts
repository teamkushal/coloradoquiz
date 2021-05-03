import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3313Component } from './test-component3313.component';

describe('TestComponent3313Component', () => {
  let component: TestComponent3313Component;
  let fixture: ComponentFixture<TestComponent3313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
