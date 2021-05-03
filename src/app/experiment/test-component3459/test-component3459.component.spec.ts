import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3459Component } from './test-component3459.component';

describe('TestComponent3459Component', () => {
  let component: TestComponent3459Component;
  let fixture: ComponentFixture<TestComponent3459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3459Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
