import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3043Component } from './test-component3043.component';

describe('TestComponent3043Component', () => {
  let component: TestComponent3043Component;
  let fixture: ComponentFixture<TestComponent3043Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3043Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
