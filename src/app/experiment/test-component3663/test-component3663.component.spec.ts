import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3663Component } from './test-component3663.component';

describe('TestComponent3663Component', () => {
  let component: TestComponent3663Component;
  let fixture: ComponentFixture<TestComponent3663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3663Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
