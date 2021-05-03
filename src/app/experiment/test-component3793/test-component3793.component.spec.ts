import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3793Component } from './test-component3793.component';

describe('TestComponent3793Component', () => {
  let component: TestComponent3793Component;
  let fixture: ComponentFixture<TestComponent3793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3793Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
