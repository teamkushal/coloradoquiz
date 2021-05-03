import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3782Component } from './test-component3782.component';

describe('TestComponent3782Component', () => {
  let component: TestComponent3782Component;
  let fixture: ComponentFixture<TestComponent3782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3782Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
