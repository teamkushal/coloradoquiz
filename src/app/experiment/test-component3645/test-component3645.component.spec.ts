import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3645Component } from './test-component3645.component';

describe('TestComponent3645Component', () => {
  let component: TestComponent3645Component;
  let fixture: ComponentFixture<TestComponent3645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3645Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
