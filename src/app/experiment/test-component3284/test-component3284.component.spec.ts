import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3284Component } from './test-component3284.component';

describe('TestComponent3284Component', () => {
  let component: TestComponent3284Component;
  let fixture: ComponentFixture<TestComponent3284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
