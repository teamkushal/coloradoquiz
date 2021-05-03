import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3582Component } from './test-component3582.component';

describe('TestComponent3582Component', () => {
  let component: TestComponent3582Component;
  let fixture: ComponentFixture<TestComponent3582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3582Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
