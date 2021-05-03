import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3222Component } from './test-component3222.component';

describe('TestComponent3222Component', () => {
  let component: TestComponent3222Component;
  let fixture: ComponentFixture<TestComponent3222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
