import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3210Component } from './test-component3210.component';

describe('TestComponent3210Component', () => {
  let component: TestComponent3210Component;
  let fixture: ComponentFixture<TestComponent3210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
