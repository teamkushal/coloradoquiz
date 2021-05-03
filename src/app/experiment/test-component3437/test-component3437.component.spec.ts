import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3437Component } from './test-component3437.component';

describe('TestComponent3437Component', () => {
  let component: TestComponent3437Component;
  let fixture: ComponentFixture<TestComponent3437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3437Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
