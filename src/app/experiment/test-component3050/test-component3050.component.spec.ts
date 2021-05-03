import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3050Component } from './test-component3050.component';

describe('TestComponent3050Component', () => {
  let component: TestComponent3050Component;
  let fixture: ComponentFixture<TestComponent3050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3050Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
