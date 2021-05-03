import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3021Component } from './test-component3021.component';

describe('TestComponent3021Component', () => {
  let component: TestComponent3021Component;
  let fixture: ComponentFixture<TestComponent3021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
