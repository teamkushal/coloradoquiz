import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3289Component } from './test-component3289.component';

describe('TestComponent3289Component', () => {
  let component: TestComponent3289Component;
  let fixture: ComponentFixture<TestComponent3289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3289Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
