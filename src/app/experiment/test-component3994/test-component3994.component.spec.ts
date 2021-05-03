import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3994Component } from './test-component3994.component';

describe('TestComponent3994Component', () => {
  let component: TestComponent3994Component;
  let fixture: ComponentFixture<TestComponent3994Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3994Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
