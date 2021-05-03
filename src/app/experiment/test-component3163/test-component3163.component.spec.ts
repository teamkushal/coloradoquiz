import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3163Component } from './test-component3163.component';

describe('TestComponent3163Component', () => {
  let component: TestComponent3163Component;
  let fixture: ComponentFixture<TestComponent3163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
