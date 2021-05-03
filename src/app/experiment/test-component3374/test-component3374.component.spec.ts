import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3374Component } from './test-component3374.component';

describe('TestComponent3374Component', () => {
  let component: TestComponent3374Component;
  let fixture: ComponentFixture<TestComponent3374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3374Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
