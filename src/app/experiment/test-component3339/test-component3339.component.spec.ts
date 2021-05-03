import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3339Component } from './test-component3339.component';

describe('TestComponent3339Component', () => {
  let component: TestComponent3339Component;
  let fixture: ComponentFixture<TestComponent3339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
