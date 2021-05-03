import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3795Component } from './test-component3795.component';

describe('TestComponent3795Component', () => {
  let component: TestComponent3795Component;
  let fixture: ComponentFixture<TestComponent3795Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3795Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
