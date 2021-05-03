import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3455Component } from './test-component3455.component';

describe('TestComponent3455Component', () => {
  let component: TestComponent3455Component;
  let fixture: ComponentFixture<TestComponent3455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3455Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
