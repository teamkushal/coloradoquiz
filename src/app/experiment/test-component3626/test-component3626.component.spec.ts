import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3626Component } from './test-component3626.component';

describe('TestComponent3626Component', () => {
  let component: TestComponent3626Component;
  let fixture: ComponentFixture<TestComponent3626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3626Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
