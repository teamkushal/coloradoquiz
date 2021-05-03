import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3779Component } from './test-component3779.component';

describe('TestComponent3779Component', () => {
  let component: TestComponent3779Component;
  let fixture: ComponentFixture<TestComponent3779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3779Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
