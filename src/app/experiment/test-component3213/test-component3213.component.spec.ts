import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3213Component } from './test-component3213.component';

describe('TestComponent3213Component', () => {
  let component: TestComponent3213Component;
  let fixture: ComponentFixture<TestComponent3213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
