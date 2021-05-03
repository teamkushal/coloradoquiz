import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3838Component } from './test-component3838.component';

describe('TestComponent3838Component', () => {
  let component: TestComponent3838Component;
  let fixture: ComponentFixture<TestComponent3838Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3838Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
