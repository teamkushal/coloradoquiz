import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3178Component } from './test-component3178.component';

describe('TestComponent3178Component', () => {
  let component: TestComponent3178Component;
  let fixture: ComponentFixture<TestComponent3178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
