import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3745Component } from './test-component3745.component';

describe('TestComponent3745Component', () => {
  let component: TestComponent3745Component;
  let fixture: ComponentFixture<TestComponent3745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3745Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
