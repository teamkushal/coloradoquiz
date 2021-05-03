import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3775Component } from './test-component3775.component';

describe('TestComponent3775Component', () => {
  let component: TestComponent3775Component;
  let fixture: ComponentFixture<TestComponent3775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3775Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
